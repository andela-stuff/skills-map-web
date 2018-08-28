import {
  SHOW_TALENT_FRAMEWORK
} from './actionTypes';

export const toggleTalentFramework = talentFramwork => ({
  type: SHOW_TALENT_FRAMEWORK,
  framework: talentFramwork
});
