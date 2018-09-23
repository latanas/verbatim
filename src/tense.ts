/*
  Project: Verbatim!
  Author:  Copyright (C) 2018, Atanas Laskov

  License: BSD license, see LICENSE for more details.

  http://www.atanaslaskov.com/verbatim/
*/
import Conjugation from './conjugation'

// Conjugation interface for a single verbal tense
export default interface Tense {
  conjugate( infinitive: string ): Conjugation;
}
