import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const source = fs.readFileSync(
  new URL('../../../../react/components/fiscal/CteFiscalConfig.js', import.meta.url),
  'utf8',
);

test('CteFiscalConfig owns Receita Federal CT-e fiscal integration config', () => {
  assert.match(source, /IntegrationConfigPage/);
  assert.match(source, /providerKey: 'receita-federal'/);
  assert.match(source, /companyId: resolvedCompanyId/);
  assert.match(source, /clientId: resolvedCompanyId/);
  assert.match(source, /embedded/);
});

test('CteFiscalConfig normalizes people identifiers for company scope', () => {
  assert.ok(source.includes("replace(/\\D+/g, '')"));
  assert.ok(source.includes('company?.id'));
  assert.ok(source.includes("company?.['@id']"));
});
