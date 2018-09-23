/*
  Project: Verbatim!
  Author:  Copyright (C) 2018, Atanas Laskov

  License: BSD license, see LICENSE for more details.

  http://www.atanaslaskov.com/verbatim/
*/

// Detects the verb infinitive group
export default class VerbGroupDetector {
  private static endings: string[] = ["er", "ir", "re"];
  private group: number = 0;

  public constructor( infinitive: string ) {
    let g: number = 1;

    for( let e of VerbGroupDetector.endings ) {
      let endingRegExp = new RegExp("[a-z]*" + e + "$");

      if( infinitive.match(endingRegExp) ) {
        this.group = g;
        break;
      }
      g++;
    }
  }

  isVerbInfinitive(): boolean {
    return this.group != 0;
  }

  getVerbGroup(): number {
    return this.group;
  }

  getVerbEnding(): string {
    if( this.isVerbInfinitive() ) {
      return VerbGroupDetector.endings[ this.group - 1 ];
    }
    return "";
  }
}
