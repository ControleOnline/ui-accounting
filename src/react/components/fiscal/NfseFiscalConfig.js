import React from 'react';
import IntegrationConfigPage from '@controleonline/ui-common/src/react/pages/IntegrationConfigPage';
import {resolveFiscalCompanyId} from './CteFiscalConfig';

export default function NfseFiscalConfig({company, companyId, navigation}) {
  const resolvedCompanyId = resolveFiscalCompanyId(companyId || company);
  if (!resolvedCompanyId) return null;
  return <IntegrationConfigPage navigation={navigation} route={{params: {
    providerKey: 'receita-federal', fiscalTab: 'nfse', companyId: resolvedCompanyId, clientId: resolvedCompanyId,
  }}} fiscalTab="nfse" onlyFiscalTab embedded />;
}
