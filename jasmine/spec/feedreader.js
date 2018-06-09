/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* Test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL is defined and it contains a URL', function() {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url).toContain('http://');
            });
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name is defined and it is not empty', function() {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            });
        });
    });


    describe('The menu',function() {
        /* Test that ensures the menu element is
         * hidden by default.
         */
        const bodyEl = document.querySelector('body');
        const menuEl = document.querySelector('.menu-icon-link')

        it('menu element is hidden by default',function() {
            expect(bodyEl.className).toBe('menu-hidden');
        });

         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('the menu changes visibility when the menu icon is clicked',function() {
            menuEl.click();
            expect(bodyEl.className).not.toBe('menu-hidden');
            menuEl.click();
            expect(bodyEl.className).toBe('menu-hidden');
         });
    });

    describe('Initial Entries',function() {
        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        const feedEl = document.querySelector('.feed');
        const entryEl = document.querySelector('.feed .entry-link .entry');

        beforeEach(function(done) {
            setTimeout(function() {
              loadFeed(1, function() {
                done();
              });
            }, 100);
          });

        it('should be at least a single .entry element within the .feed container',function(done) {          
            const feedEl = document.querySelector('.feed');
            const entryEl = document.querySelector('.feed .entry-link .entry');
            expect(feedEl.childElementCount).toBeGreaterThan(0);
            expect(entryEl.className).toBe('entry');
            done();
        });
    });
        

    describe('New Feed Selection',function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        beforeEach(function(done) {
            setTimeout(function() {
              loadFeed(1, function() {
                done();
              });
            }, 100);
          });

        it('should change the content',function(){
            
        });
    });

}());
