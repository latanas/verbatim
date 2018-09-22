/*
  Project: Verbatim!
  Author:  Copyright (C) 2018, Atanas Laskov

  License: BSD license, see LICENSE.md for more details.

  http://www.atanaslaskov.com/verbatim/
*/

export class Conjugation {
  je: string;
  tu: string;
  il: string;
  nous: string;
  vous: string;
  ils: string;
}

export class ConjugationTenseMap {
  [tense: string]: Conjugation;
}

export interface ConjugationAlgorithm {
  getVerbGroup(): number;
  getVerbDetector(): RegExp;
  getVerbConjugation(infinitive: string): ConjugationTenseMap;
}
