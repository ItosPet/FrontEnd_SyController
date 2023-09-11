function alterurl(nome){
    const urloriginal = window.localtion.href;

    const alterada = `${urloriginal}/${nome}`;

    history.pushState(null, null, alterada);
}