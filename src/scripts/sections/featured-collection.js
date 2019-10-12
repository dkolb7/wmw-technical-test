/**
 * Section: Featured collection
 * ------------------------------------------------------------------------------
 * Featured collection configuration for complete theme support
 * - https://github.com/Shopify/theme-scripts/tree/master/packages/theme-sections
 *
 * @namespace featuredCollection
 */
import {register} from '@shopify/theme-sections';

/**
 * Featured collection constructor
 * Executes on page load as well as Theme Editor `section:load` events.
 *
 * @param {string} container - selector for the section container DOM element
 */
register('featured-collection', {

  init() {
    window.console.log('Initialising featured collection section');
  },

  publicMethod() {
    // Custom public section method
  },

  _privateMethod() {
    // Custom private section method
  },

  // Shortcut function called when a section is loaded via 'sections.load()' or by the Theme Editor 'shopify:section:load' event.
  onLoad() {
    // Do something when a section instance is loaded
    this.init();
  },

  // Shortcut function called when a section unloaded by the Theme Editor 'shopify:section:unload' event.
  onUnload() {
    // Do something when a section instance is unloaded
  },

  // Shortcut function called when a section is selected by the Theme Editor 'shopify:section:select' event.
  onSelect() {
    // Do something when a section instance is selected
  },

  // Shortcut function called when a section is deselected by the Theme Editor 'shopify:section:deselect' event.
  onDeselect() {
    // Do something when a section instance is selected
  },

  // Shortcut function called when a section block is selected by the Theme Editor 'shopify:block:select' event.
  onBlockSelect() {
    // Do something when a section block is selected
  },

  // Shortcut function called when a section block is deselected by the Theme Editor 'shopify:block:deselect' event.
  onBlockDeselect() {
    // Do something when a section block is deselected
  },
});

  
// jQuery Ready
$(document).ready(function(){

  // Changes coursel dots
  function update_slider(number) {
    $main_carousel = $('.main-carousel').flickity({
      groupCells: number,
    });
  }
  
  // load or resize edit carousel dots
  $(window).on('load resize', function() {

    let body_width = document.querySelector('body').clientWidth;

    if ( body_width >= 1024 && body_width > 769) {
      update_slider(4);
    }

    if (body_width <= 768 && body_width >= 577) {
      update_slider(2);
    } 

    if (body_width <= 576) {
      update_slider(1);
    }

    // Init carousel
    let $main_carousel= $('.main-carousel').flickity({
        cellAlign: 'left',
        contain: false,
        draggable: true,
        groupCells: 4,
        wrapAround: false,
        adaptiveHeight: false,
        arrowShape: { 
          x0: 10,
          x1: 60, y1: 50,
          x2: 65, y2: 45,
          x3: 20
        },
        resize: true,
      });
  });

});
