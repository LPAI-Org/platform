//
// Copyright © 2020, 2021 Anticrm Platform Contributors.
// Copyright © 2021 Hardcore Engineering Inc.
//
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

import { IntlString, mergeIds } from '@anticrm/platform'

import contact, { contactId } from '@anticrm/contact'

export default mergeIds(contactId, contact, {
  string: {
    Apply: '' as IntlString,
    Contacts: '' as IntlString,
    CreatePerson: '' as IntlString,
    CreatePersons: '' as IntlString,
    CreateOrganizations: '' as IntlString,
    Organizations: '' as IntlString,
    SelectFolder: '' as IntlString,
    OrganizationsFolder: '' as IntlString,
    PersonsFolder: '' as IntlString,
    AddSocialLinks: '' as IntlString,
    Name: '' as IntlString,
    MakePrivate: '' as IntlString,
    MakePrivateDescription: '' as IntlString
  }
})
