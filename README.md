# Rails ToDos

An implemnation of the classic todo item manager application with Ruby on Rails and Backbone.js

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

Inside of the applications directory install the bundle specified in the Gemfile

<code>bundle</code> (Which is a shortcut for 'bundle install'

Create the Database and run the applications migrations to create the database's tables.

<code>bundle exec rake db:create db:migrate</code>

Start the server
<code>bundle exec rails server</code>


Backbone.js on Rails Example app
================================

It's a Rails 3.1 app.

Running the app
---------------

Make sure you're running Ruby 1.9 (there's an .rvmrc) and then:

    bundle
    bundle exec rake db:create db:migrate
    bundle exec rails server

Open on http://localhost:3000

Running the tests
-----------------

The first time, create the test database:

    bundle exec rake db:test:prepare

There are three sets of tests: Cucumber integration test, RSpec isolation specs
for Rails components, and Jasmine isolation specs for Backbone components.

Run them all at once:

    bundle rake

Or one at a time

    bundle rake cucumber
    bundle rake spec
    bundle rake jasmine
