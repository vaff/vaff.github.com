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
task :default => [:serve]


# Usage: rake post title="A Title" [date="2012-02-09"]
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


desc 'Build site'
task :build => [:build_javascript, :build_less] do
    puts "Site build"
end

desc 'Build javascript with requirejs'
task :build_javascript do
  system 'node _build/r.js -o _build/build.js'
end

desc 'Build LESS css'
task :build_less do
  system 'lessc --yui-compress assets/less/main.less assets/css/style.min.css'
end


desc 'Serve and watch the site'
task :serve do
  system 'jekyll serve --watch'
end
