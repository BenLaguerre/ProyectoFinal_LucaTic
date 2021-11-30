import { Perfil } from './Perfil';

describe('nuevo perfil', function () {
  var perfil: Perfil;

  describe('Perfil', () => {
    it('crear instancia de Perfil', () => {
      expect(
        new Perfil(
          1,
          'maria@gmail.com',
          'maria',
          'mujer',
          27,
          'madrid',
          'el aliento de mi gato huele a comida de gato',
          'rock'
        )
      ).toBeTruthy();
    });
  });

  it('comprobamos que perfil sea instancia de Perfil', function () {
    perfil = new Perfil(
      1,
      'maria@gmail.com',
      'maria',
      'mujer',
      27,
      'madrid',
      'el aliento de mi gato huele a comida de gato',
      'rock'
    );
    expect(perfil).toBeInstanceOf(Perfil);
  });
});
