/**
 @module ember
 @submodule ember-views
*/

import { Mixin } from 'ember-metal/mixin';
import View from 'ember-views/views/view';

/**
 @class EmptyViewSupport
 @namespace Ember
 @private
*/
export default Mixin.create({
  /**
   This provides metadata about what kind of empty view class this
   collection would like if it is being instantiated from another
   system (like Handlebars)

   @private
   @property emptyViewClass
  */
  emptyViewClass: View
});
