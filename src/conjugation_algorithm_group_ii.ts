/*
  Project: Verbatim!
  Author:  Copyright (C) 2018, Atanas Laskov

  License: BSD license, see LICENSE.md for more details.

  http://www.atanaslaskov.com/verbatim/
*/
import {Conjugation, ConjugationTenseMap, ConjugationAlgorithm} from './conjugation'

export default class ConjugationAlgorithmGroupII implements ConjugationAlgorithm {
  public getVerbDetector(): RegExp {
    return new RegExp("ir$");
  }

  public conjugate( infinitive: string ): ConjugationTenseMap {
    let root = infinitive.replace( this.getVerbDetector(), "" );
    let tenses = new ConjugationTenseMap();

    tenses["indicatif-present"] = {
      je: root + "is",
      tu: root + "is",
      il: root + "it",
      nous: root + "issons",
      vous: root + "issez",
      ils: root + "issent",
    };

    return tenses;
  }
}
