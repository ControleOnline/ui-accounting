import React from 'react';
import IntegrationConfigPage from '@controleonline/ui-common/src/react/pages/IntegrationConfigPage';
import {resolveFiscalCompanyId} from './CteFiscalConfig';

/** Full fiscal configuration used by the company details screen. */
export default function FiscalCompanyConfig({company, companyId, navigation}) {
  const resolvedCompanyId = resolveFiscalCompanyId(companyId || company);

  if (!resolvedCompanyId) {
    return null;
  }

  return (
    <IntegrationConfigPage
      navigation={navigation}
      route={{
        params: {
          providerKey: 'receita-federal',
          companyId: resolvedCompanyId,
          clientId: resolvedCompanyId,
        },
      }}
      embedded
    />
  );
}
