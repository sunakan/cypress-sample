describe('テストだぜー', () => {
  it('expect(XXX).to.equal(YYY)', () => {
    expect(true).to.equal(true);
  });
});

// Examples
// https://example.cypress.io/
describe('example.cypress.ioに対してテスト', () => {
  it('特定のページに遷移してEメールアドレスを打ち込むまで', () => {
    // (1) サイトに訪問
    cy.visit('https://example.cypress.io');

    // ポーズ(一時停止)
    //cy.pause()

    // (2) typeという文字列がある => Click => 画面遷移
    cy.contains('type').click();

    // (3) 遷移先のURLには'/commands/actions'が含まれている
    cy.url()
      .should('include', '/commands/actions');


    // (4) .action-emailクラス(CSS)を持つDOMを取得
    //   => 取得したDOMに対して 'fake@example.com' と打ち込む
    //   => すると、そのDOMのvalueは 'fake@example.com' となっている
    cy.get('.action-email')
      .type('fake@example.com')
      .should('have.value', 'fake@example.com');
  });
});
