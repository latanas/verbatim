/*
  Project: Verbatim!
  Author:  Copyright (C) 2018, Atanas Laskov

  License: BSD license, see LICENSE.md for more details.

  http://www.atanaslaskov.com/verbatim/
*/
import { ConjugationAlgorithm, ConjugationTenseMap } from './conjugation'

import ConjugationAlgorithmGroupI from './conjugation_algorithm_group_i';
import ConjugationAlgorithmGroupII from './conjugation_algorithm_group_ii';
import ConjugationAlgorithmGroupIII from './conjugation_algorithm_group_iii';

export default class VerbGroupDetector {
  private algorithm: ConjugationAlgorithm = {
    getVerbGroup: (): number => {
      return 0;
    },
    getVerbDetector: (): RegExp => {
      return new RegExp("");
    },
    getVerbConjugation: ( infinitive: string ): ConjugationTenseMap => {
      return new ConjugationTenseMap();
    }
  };

  public constructor( infinitive: string ) {
    let detector: ConjugationAlgorithm = new ConjugationAlgorithmGroupI();

    if( infinitive.match(detector.getVerbDetector()) ) {
      this.algorithm = detector;
    }
    else {
      detector = new ConjugationAlgorithmGroupII();

      if( infinitive.match(detector.getVerbDetector()) ) {
        this.algorithm = detector;
      }
      else {
        detector = new ConjugationAlgorithmGroupIII();

        if( infinitive.match(detector.getVerbDetector()) ) {
          this.algorithm = detector;
        }
      }
    }
  }

  public getGroupAlgorithm(): ConjugationAlgorithm {
    return this.algorithm;
  }
}
