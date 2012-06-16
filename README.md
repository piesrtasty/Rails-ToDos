# Rails ToDos

An implemnation of the classic todo item manager application with Ruby on Rails and Backbone.js

## Installation

Install Ruby (preferably through RVM) by entering the following in a terminal.

<code>$ curl -L https://get.rvm.io | bash -s stable --ruby</code>

After RVM installs, add the following to your bash profile to ensure RVM is loaded into every new shell session

<code>[[ -s "/Users/idontgiveafuck/.rvm/scripts/rvm" ]] && source "/Users/idontgiveafuck/.rvm/scripts/rvm"</code>

Once RVM is installed, install Ruby 1.9.3.

<code>rvm install ruby-1.9.3-rc1</code> 

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
