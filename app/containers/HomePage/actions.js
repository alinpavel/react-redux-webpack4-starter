import { POST_COMPANY_ONBOARDING } from './constants';

export function postCompanyOnboarding(value) {
  return {
    type: POST_COMPANY_ONBOARDING,
    value
  };
}
