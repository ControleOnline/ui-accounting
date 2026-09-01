import React from 'react';
import IntegrationConfigPage from '@controleonline/ui-common/src/react/pages/IntegrationConfigPage';

export const resolveFiscalCompanyId = company =>
  String(company?.id || company?.value || company?.['@id'] || company || '').replace(/\D+/g, '');

export default function CteFiscalConfig({company, companyId, navigation}) {
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
