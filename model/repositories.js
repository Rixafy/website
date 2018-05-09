import {repositories} from './../data/repositories';
import _ from 'lodash';

export function getEnabledRepositories() {
  return _.filter(repositories, r => r.enabled);
}

export function getRepository(repository) {
  return repositories[repository];
}

export function isEnabledRepository(repository) {
  return getEnabledRepositories()[repository] !== undefined;
}
