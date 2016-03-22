//2.0TODO: Remove this in 2.0
//This is a fallback path for the `{{#each}}` helper that supports deprecated
//behavior such as itemController.

import legacyEachTemplate from 'ember-htmlbars/templates/legacy-each';
import { computed } from 'ember-metal/computed';
import View from 'ember-views/views/view';
import EmptyViewSupport from 'ember-views/mixins/empty_view_support';

export default View.extend(EmptyViewSupport, {
  template: legacyEachTemplate,

  /*
    Support for ArrayController has been extracted to the ember-legacy-controllers addon.
  */

  _arrangedContent: computed('attrs.content', function() {
    return this.getAttr('content');
  })
});
