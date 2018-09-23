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
  private infinitive: string;
  private group: number = 0;
  private algorithm: ConjugationAlgorithm = {
    getVerbDetector: (): RegExp => {
      return new RegExp("");
    },
    conjugate: ( infinitive: string ): ConjugationTenseMap => {
      return new ConjugationTenseMap();
    }
  };
  private conjugation: ConjugationTenseMap;

  public constructor( infinitive: string ) {
    let detector: ConjugationAlgorithm = new ConjugationAlgorithmGroupI();

    if( infinitive.match(detector.getVerbDetector()) ) {
      this.group = 1;
      this.algorithm = detector;
    }
    else {
      detector = new ConjugationAlgorithmGroupII();

      if( infinitive.match(detector.getVerbDetector()) ) {
        this.group = 2;
        this.algorithm = detector;
      }
      else {
        detector = new ConjugationAlgorithmGroupIII();

        if( infinitive.match(detector.getVerbDetector()) ) {
          this.group = 3;
          this.algorithm = detector;
        }
      }
    }

    this.infinitive = infinitive;
    this.conjugation = this.algorithm.conjugate( infinitive );
  }

  public getVerbGroup(): number {
    return this.group;
  }

  public getVerbInfinitive(): string {
    return this.infinitive;
  }

  public getVerbConjugation(): ConjugationTenseMap {
    return this.conjugation;
  }

}
