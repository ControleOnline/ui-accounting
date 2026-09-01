import React from 'react';
import IntegrationConfigPage from '@controleonline/ui-common/src/react/pages/IntegrationConfigPage';
import {resolveFiscalCompanyId} from './CteFiscalConfig';

export default function NfceFiscalConfig({company, companyId, navigation}) {
  const resolvedCompanyId = resolveFiscalCompanyId(companyId || company);
  if (!resolvedCompanyId) return null;
  return <IntegrationConfigPage navigation={navigation} route={{params: {
    providerKey: 'receita-federal', fiscalTab: 'nfce', companyId: resolvedCompanyId, clientId: resolvedCompanyId,
  }}} fiscalTab="nfce" onlyFiscalTab embedded />;
}
