// apps/api/test/alias.test.ts
import { AuthGuard } from '@common/guards/AuthGuard';
import { CallEntity } from '@modules/calls/domain/call.entity';

describe('Alias resolution', () => {
  it('should import AuthGuard and CallEntity via aliases', () => {
    expect(typeof AuthGuard).toBe('function');
    expect(typeof CallEntity).toBe('function');
  });
});
