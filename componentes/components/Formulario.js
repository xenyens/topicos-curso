import CustomInput from './CustomInput';

export default function Formulario() {
  const form = document.createElement('form');
  form.classList = 'formulario';

  const inputs = [
    {
      titleLable: 'Nombre Paciente',
      placeholderLabel: 'Escribe el nombre del paciente',
    },
    {
      titleLable: 'Teléfono del Paciente',
      placeholderLabel: 'Teléfono',
    },
    {
      titleLable: 'Correo Electrónico',
      placeholderLabel: 'Correo Electrónica',
    },
    {
      titleLable: 'Síntomas',
      placeholderLabel: 'Síntomas',
    },
  ];

  inputs.forEach((input) => {
    form.appendChild(CustomInput(input));
  });

  //   inputs.map((input) => {
  //     form.appendChild(CustomInput(input));
  //   });

  return form;
}
