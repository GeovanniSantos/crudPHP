 consist.onclick=function () {
        // Inicialização dos status de erros...
        fidade.style.backgroundColor="#fff"; 
        mens.innerHTML=""; 
        
        let erro=0;
        if (fnome.value == "") {
            fnome.style.backgroundColor="#f00"; 
            erro=1;
        }
        if (fsbnome.value == "") {
            fsbnome.style.backgroundColor="#f00"; 
            erro=1;
        }
        if (femail.value == "") {
            femail.style.backgroundColor="#f00"; 
            erro=1;
        }
        if ((fsex1.checked==false) && (fsex2.checked==false)) {
            mens.innerHTML="  Selecione a opcão."; 
            mens.style.color="#f00";
            erro=1;
        }
        if(fidade.value=="") {
           fidade.style.backgroundColor="#f00"; 
           erro=1;
        }
         if (!erro) {
            if (consist.value=="Cadastrar") // Se clicou no botão "Cadastrar".
                formcad.submit();           // Envia o formulário e chama script php de cadastro...
             else 
            if (consist.value=="Alterar")   // Se clicou no botão "Alterar".
                formupd.submit();formupd   // Envia o formulário e chama script php de alteração... 
         }     
    }
    
    function verifica(varid){    // Recebe o 'id' do botão 'Excluir" (vide impressão dos dados na tabela).
      if(confirm("Tem certeza que deseja excluir permanentemente este cadastro? Id = " + varid))  
        window.location="delete.php?varid=" + varid;   // Chama script delete.php e envia o 'id'.
    }  