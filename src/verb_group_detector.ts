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
  private root: string = "";

  public constructor( infinitive: string ) {
    for( let e of VerbGroupDetector.endings ) {
      let endingRegExp = new RegExp("[a-z]*" + e + "$");

      if( infinitive.match(endingRegExp) ) {
        break;
      }
      this.group++;
    }

    if( this.isVerbInfinitive() ) {
      this.root = infinitive;
      this.root.replace( new RegExp(this.getVerbEnding() + "$"), "" );
    }
  }

  isVerbInfinitive(): boolean {
    return this.group < VerbGroupDetector.endings.length;
  }

  getVerbRoot(): string {
    return this.root;
  }

  getVerbEnding(): string {
    if( this.isVerbInfinitive() ) {
      return VerbGroupDetector.endings[ this.group ];
    }
    return "";
  }
}
