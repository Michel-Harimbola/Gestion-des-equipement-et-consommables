const generateRetardEmailHTML = (nom, equipement) => `
<table style="width:100%; font-family: Arial, sans-serif; background-color:#f4f4f4; padding:20px;">
  <tr>
    <td>
      <table style="max-width:600px; margin:auto; background:white; padding:20px; border-radius:10px;">
        <tr>
          <td style="text-align:center;">
            <img src="cid:YouthComputing" alt="YouthComputing" style="width:120px; margin-bottom:20px;" />
          </td>
        </tr>
        <tr>
          <td>
            <h2 style="color:#333;">Bonjour ${nom},</h2>
            <p>L'équipement <strong>${equipement}</strong> aurait dû être retourné.</p>
            <p>Merci de le ramener dès que possible.</p>
          </td>
        </tr>
        <tr>
          <td style="padding-top:20px; text-align:center; color:#888; font-size:12px;">
            &copy; 2025 Youth Computing
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`;

module.exports = { generateRetardEmailHTML };