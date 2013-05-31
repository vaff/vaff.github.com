require "rubygems"
require 'rake'
require 'yaml'
require 'time'

# Rake tools
# Based on jekyll-bootstrap
# post: Create new post
# page: Create new page

SOURCE = "."
CONFIG = {
  'layouts' => File.join(SOURCE, "_layouts"),
  'posts' => File.join(SOURCE, "_posts"),
  'post_ext' => "md"
}

# Default :serve
task :default => [:'jekyll:serve']

namespace :jekyll do

  # Usage: rake jekyll:serve
  desc 'Serve and watch the site with Jekyll'
  task :serve => :'env:development' do
    system 'jekyll serve --watch'
  end # task :serve


  # Usage: rake jekyll:post title="A Title" [date="2012-02-09"]
  desc "Begin a new post in #{CONFIG['posts']}"
  task :post do
    abort("rake aborted: '#{CONFIG['posts']}' directory not found.") unless FileTest.directory?(CONFIG['posts'])
    title = ENV["title"] || "new-post"
    slug = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
    date = Time.new
    datef = date.strftime('%Y-%m-%d')

    filename = File.join(CONFIG['posts'], "#{datef}-#{slug}.#{CONFIG['post_ext']}")
    if File.exist?(filename)
      abort("That name is in use already")
    end

    puts "Creating new post: #{filename}"
    open(filename, 'w') do |post|
      post.puts "---"
      post.puts "layout: post"
      post.puts "title: \"#{title.gsub(/-/,' ')}\""
      post.puts "date: #{date.strftime('%Y-%m-%d %H:%M:%S')}"
      post.puts 'description: ""'
      post.puts "reading: "
      post.puts "category: "
      post.puts "tags: []"
      post.puts "---"
    end
  end # task :post

end # namespace :jekyll


namespace :site do

  # Usage: rake site:push
  desc 'Push the repository to GitHub Pages'
  task :push do
    # Commit and push.
    puts "Committing and pushing to GitHub Pages..."
    sha = `git log`.match(/[a-z0-9]{40}/)[0]

    sh "git add ."
    sh "git commit -m 'Updating to #{sha}.'"
    sh "git push origin"

    puts 'Done.'
  end # task :site


  desc 'Build site and push respositry to GitHub Pages'
  task :publish => [:'build:all', :push]
end # namespace :site


namespace :build do

  desc 'Build Javascript with requirejs'
  task :js do
    puts "Building Javascript with RequireJS"
    system 'node _build/r.js -o _build/build.js'
    puts "Done."
  end # task:js

  desc 'Build and compress LESS into CSS'
  task :less do
    puts "Building and compressing LESS into CSS"
    system 'lessc --yui-compress assets/less/main.less assets/css/style.min.css'
    puts "Done."
  end # task :less

  desc 'Build and compress site'
  task :all => [:js, :less, :'env:production']

end # namespace :build


namespace :env do

  desc 'Change the enviroment to production'
  task :production do
     sh "cp _includes/production.html _includes/dynamic.html"
  end


  desc 'Change the enviroment to development'
  task :development do
    sh "cp _includes/development.html _includes/dynamic.html"
  end

  desc 'Shorthand development'
  task :d => :development

  desc 'Shorthand production'
  task :p => :production
end

