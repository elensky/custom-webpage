import {Pipe} from '@angular/core';
import {Sticker} from './sticker';

@Pipe({
  name: 'tagsFilter'
})
export class TagsPipe {

  transform(stickers: [Sticker], filterTags: [string]) {

    if (!stickers || !stickers.length) {
      return stickers;
    }
    return stickers.filter(sticker => {
      if (!filterTags || !filterTags.length) {
        return true;
      }
      if (!sticker.tags || !sticker.tags.length) {
        return false;
      }
      for (let tag of filterTags) {
        if (sticker.tags.indexOf(tag) !== -1) {
          return true;
        }
      }
    });
  }
}
