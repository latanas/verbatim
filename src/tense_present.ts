/*
  Project: Verbatim!
  Author:  Copyright (C) 2018, Atanas Laskov

  License: BSD license, see LICENSE for more details.

  http://www.atanaslaskov.com/verbatim/
*/
import Tense from './tense'
import Conjugation from './conjugation'
import VerbGroupDetector from './verb_group_detector'

// Conjugates verbs in the present tense
export default class TensePresent implements Tense {
  public conjugate( infinitive: string ): Conjugation | undefined {
    let detector: VerbGroupDetector = new VerbGroupDetector( infinitive );
    let root = infinitive.replace( new RegExp(detector.getVerbEnding() + "$"), "" );

    switch( detector.getVerbGroup() ) {
      case 1:
        return {
          je: root + "e",
          tu: root + "es",
          il: root + "e",
          nous: root + "ons",
          vous: root + "ez",
          ils: root + "ent",
        };

      case 2:
        return {
          je: root + "is",
          tu: root + "is",
          il: root + "it",
          nous: root + "issons",
          vous: root + "issez",
          ils: root + "issent",
        };

      case 3:
        return {
          je: root + "s",
          tu: root + "s",
          il: root + "",
          nous: root + "ons",
          vous: root + "ez",
          ils: root + "ent",
        };
    }
    return undefined;
  }
}
