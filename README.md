# Rails ToDos (

An implemnation of the classic todo item manager application with a Ruby on Rails backend and a Backbone.js frontend.

<sub>Note: This is a Rails 3.1 application.</sub>

## Installation

Install Ruby (preferably through RVM) by entering the following in a terminal.

<code>$ curl -L https://get.rvm.io | bash -s stable --ruby</code>

After RVM installs, add the following to your bash profile to ensure RVM is loaded into every new shell session

<code>[[ -s "/Users/{{ YOUR USERNAME }}/.rvm/scripts/rvm" ]] && source "/Users/{{ YOUR USERNAME }}/.rvm/scripts/rvm"</code>

Install Ruby 1.9.3.

<code>rvm install ruby-1.9.3-rc1</code>

## Quick Start

Install Bundler

<code>gem install bundler</code>

Inside of the applications directory install the gem bundle specified in the Gemfile

<code>bundle</code> (Which is a shortcut for 'bundle install'

Create the database and populate it with tables.

<code>bundle exec rake db:create db:migrate</code>

Start the server

<code>bundle exec rails server</code>

Go to http://localhost:3000 to open the application.


## Running The Tests

The first time, create the test database.

<code>bundle exec rake db:test:prepare</code>

The application has three sets of tests: Cucumber integration test, RSpec isolation specs
for Rails components, and Jasmine isolation specs for Backbone components.

To run them all at once.

<code>bundle rake</code>

Or run them one at a time

<code>bundle rake cucumber</code>
<code>bundle rake spec</code>
<code>bundle rake jasmine</code>

 

Backbone.js on Rails Example app
================================

