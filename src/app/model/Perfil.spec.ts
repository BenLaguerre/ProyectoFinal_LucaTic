import { Perfil } from './Perfil';

describe('nuevo perfil', function () {
  var perfil: Perfil;

  describe('Perfil', () => {
    it('crear instancia de Perfil', () => {
      expect(
        new Perfil(
          "saidu32554uog4gsd7",
          1,
          'maria@gmail.com',
          'maria',
          'mujer',
          27,
          'madrid',
          'el aliento de mi gato huele a comida de gato',
          'rock',
          ["asdasd3225435"],
          ["asdfgr56435"]
        )
      ).toBeTruthy();
    });
  });

  it('comprobamos que perfil sea instancia de Perfil', function () {
    perfil = new Perfil(
      "saidu32554uog4gsd7",
      1,
      'maria@gmail.com',
      'maria',
      'mujer',
      27,
      'madrid',
      'el aliento de mi gato huele a comida de gato',
      'rock',
      ["asdasd3225435"],
      ["asdfgr56435"]
    );
    expect(perfil).toBeInstanceOf(Perfil);
  });
});
