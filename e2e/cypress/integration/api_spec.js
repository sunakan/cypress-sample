describe('APIのテスト', () => {
  it('うぇーい', () => {
    cy.request({
      method: 'GET',
      url: 'https://httpbin.org/get',
    }).should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.url).to.eq('https://httpbin.org/get')
      expect(response.body).to.have.all.keys(
        'args', 'headers', 'origin', 'url'
      )
      cy.log(JSON.stringify(response.body))
    });
  });
});
