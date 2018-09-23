/*
  Project: Verbatim!
  Author:  Copyright (C) 2018, Atanas Laskov

  License: BSD license, see LICENSE.md for more details.

  http://www.atanaslaskov.com/verbatim/
*/
import { Conjugation, ConjugationTenseMap, ConjugationAlgorithm } from './conjugation'

export default class ConjugationAlgorithmGroupI implements ConjugationAlgorithm {
  public getVerbDetector(): RegExp {
    return new RegExp("er$");
  }

  public conjugate( infinitive: string ): ConjugationTenseMap {
    let root = infinitive.replace( this.getVerbDetector(), "" );
    let tenses = new ConjugationTenseMap();

    tenses["indicatif-present"] = {
      je: root + "e",
      tu: root + "es",
      il: root + "e",
      nous: root + "ons",
      vous: root + "ez",
      ils: root + "ent",
    };

    return tenses;
  }
}
