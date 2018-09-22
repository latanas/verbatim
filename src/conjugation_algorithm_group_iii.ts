/*
  Project: Verbatim!
  Author:  Copyright (C) 2018, Atanas Laskov

  License: BSD license, see LICENSE.md for more details.

  http://www.atanaslaskov.com/verbatim/
*/
import {Conjugation, ConjugationTenseMap, ConjugationAlgorithm} from './conjugation'

export default class ConjugationAlgorithmGroupIII implements ConjugationAlgorithm {
  public getVerbGroup(): number {
    return 3;
  }

  public getVerbDetector(): RegExp {
    return new RegExp("re$");
  }

  public getVerbConjugation(infinitive: string): ConjugationTenseMap {
    let root = infinitive.replace( this.getVerbDetector(), "" );
    let tenses = new ConjugationTenseMap();

    tenses["indicatif-present"] = {
      je: root + "s",
      tu: root + "s",
      il: root + "",
      nous: root + "ons",
      vous: root + "ez",
      ils: root + "ent",
    };

    return tenses;
  }
}
