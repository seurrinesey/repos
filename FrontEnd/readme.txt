pour avoir un design uniforme j'ai crée une classe dans le fichier style.css 
qui se trouve dans le dossier css,
cette classe permet d'avoir le même design que celui des inputs ( date1 et date2):

class:

.form-sel {
  border-radius: 0;
  height:60px;
  width:100%;
  border-color: #d2d6de;
}


après on affecte cette classe aux éléments html ( index.html ):


                         <select class="col-lg-11 col-md-11 form-sel" name="adultes">
                                         <option value="">Nombre d'adultes</option>                                      
                                         <option value="0">0</option>
                                         <option value="1">1</option>
                                         <option value="2">2</option>
                                         <option value="3">3</option>
                                         <option value="4">4</option>
                                         <option value="5">5</option>
                                         <option value="+5">+5</option>


                          </select>

                                   
                         <select class="col-lg-11 col-md-11 form-sel" name="enfants">
                                      <option value="">Nombre d'enfants</option>
                                      <option value="0">0</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                      <option value="+5">+5</option>
                          </select>