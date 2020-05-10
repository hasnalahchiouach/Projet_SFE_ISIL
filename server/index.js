var express = require("express");
var mysql = require("mysql");
const bodyparser = require('body-parser');
const cors = require('cors');


var app = express();
app.use(cors());
app.use(bodyparser.json());

var connexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestion_concours',
})


connexion.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


app.listen(5000, () => console.log('Express server is runnig at port no : 5000'));

app.get('/candidats', (req, res) => {
    connexion.query('SELECT * FROM candidat', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Get an candidats
app.get('/candidats/:id', (req, res) => {
    connexion.query('SELECT * FROM candidat WHERE CandiId = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Delete an candidats
app.delete('/candidats/:id', (req, res) => {
    connexion.query('DELETE FROM candidat WHERE CandiId = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
});

//Insert an candidat
/*app.post('/candidats', (req, res) => {
    let can = req.body;
    var sql = "SET @CandiId = ?;SET @name = ?;SET @cin = ?;SET @tel = ?; \
    CALL CandidatAddOrEdit(@CandiId,@name,@cin,@tel);";
    connexion.query(sql, [can.CandiId, can.name, can.cin, can.tel], (err, rows, fields) => {
        if (!err)
            rows.forEach(element => {
                if(element.constructor == Array)
                res.send('Inserted candidat id : '+element[0].CandiId);
            });
        else
            console.log(err);
    })
});*/

// Insert post 1
app.post('/addpost', async(req, res) => {
    let candidat = {CNE:req.body.CNE, 
                CIN:req.body.CIN ,
                PrenomC:req.body.Prenom,
                NomC:req.body.Nom,
                Date_Naissance:new Date(req.body.DateNaissance),
                Adresse:req.body.Adresse,
                Sexe:req.body.Sexe,
                E_mail:req.body.E_mail,
                Etat_Civil:req.body.EtatCivil,
                Nationalite:req.body.Nationalite,
                Code_Postal:req.body.CodePostal,
                Tel:req.body.Telephone,
                Niveau_Demande:req.body.Niveau_Demande,
                Validation:false,
            };
    let sqlCandidat = 'INSERT INTO candidat SET ?';
   await connexion.query(sqlCandidat, candidat, (err, result) => {
        if(err) throw err;
        console.log(result);
        });


    let parcoursBac = {CNE:req.body.CNE, 
        Annee_Bac:req.body.Annee_Bac ,
        Serie_Bac:req.body.Serie_Bac,
        Session_Bac:req.body.Session_Bac,
        Moyenne_Bac:req.body.Moyenne_Bac,
        Mention_Bac:req.body.Mention_Bac,
    };
    let sqlParcourBac = 'INSERT INTO Cursus_Bac SET ?';
    await connexion.query(sqlParcourBac, parcoursBac, (err, result) => {
        if(err) throw err;
        console.log(result);
        });


    let parcoursUniv = {CNE:req.body.CNE, 
        Annee_Univ:req.body.Annee_Univ ,
        Type_Univ:req.body.Type_Univ,
        Nom_Univ:req.body.Nom_Univ,
        Diplome_Univ:req.body.Diplome_Univ,
        Libelle_Diplome:req.body.Libelle_Diplome,
        Moyenne_Diplome:req.body.Moyenne_Diplome,
        Mention_Diplome:req.body.Mention_Diplome,
       
       
    };
    let sqlParcourUniv = 'INSERT INTO Cursus_Universitaire SET ?';
    connexion.query(sqlParcourUniv, parcoursUniv, (err, result) => {
    if(err) throw err;
    console.log(result);
    });
});
//addparcourbac
app.post('/addparcourbac', (req, res) => {
    let post = {CNE:req.body.CNE, 
                Annee_Bac:req.body.Annee_Bac ,
                Serie_Bac:req.body.Serie_Bac,
                Session_Bac:req.body.Session_Bac,
                Moyenne_Bac:req.body.Moyenne_Bac,
                Mention_Bac:req.body.Mention_Bac,
               
            };
    let sql = 'INSERT INTO Cursus_Bac SET ?';
    let query = connexion.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
});
//addparcouruniv
app.post('/addparcouruniv', (req, res) => {
    let post = {CNE:req.body.CNE, 
                Annee_Univ:req.body.Annee_Univ ,
                Type_Univ:req.body.Type_Univ,
                Nom_Univ:req.body.Nom_Univ,
                Diplome_Univ:req.body.Diplome_Univ,
                Libelle_Diplome:req.body.Libelle_Diplome,
                Moyenne_Diplome:req.body.Moyenne_Diplome,
                Mention_Diplome:req.body.Mention_Diplome,
               
               
            };
    let sql = 'INSERT INTO Cursus_Universitaire SET ?';
    let query = connexion.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
});
// Update post
app.put('/updatepost/:id', (req, res) => {
    let NewName = req.body.name
    let NewCin = req.body.cin
    let NewTel = req.body.tel
    let sql = `UPDATE candidat SET name = '${NewName}' , cin ='${NewCin}',tel ='${NewTel}' WHERE CandiId = ${req.params.id}`;
    let query = connexion.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post updated...');
    });
});
//////////////////////////////////////////////////////////////
app.get('/parcoursBac', (req, res) => {
    connexion.query('SELECT * FROM Cursus_Bac', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});


/////////////////////////////////////////////////

app.get('/parcoursUniv', (req, res) => {
    connexion.query('SELECT * FROM Cursus_Universitaire', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//////////////////////////////////////////
app.get('/admins', (req, res) => {
    connexion.query('SELECT * FROM admin', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

app.post('/addadmin', (req, res) => {
    let post = {
        ID_Admin:req.body.ID_Admin, 
                NomAd:req.body.NomAd,
                PrenomAd:req.body.PrenomAd,
                AgeAd:req.body.AgeAd,
                E_mailAd:req.body.E_mailAd,
                Profession:req.body.Profession,
                
            };
    let sql = 'INSERT INTO admin SET ?';
    let query = connexion.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
});
///////////////////////////////////////////////////
app.get('/informations', (req, res) => {
    connexion.query('SELECT * FROM FiliereInfos', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

app.post('/addinformation', (req, res) => {
    let post = {
                ID_Filiere:req.body.ID_Filiere, 
                Libelle_Concours:req.body.Libelle_Concours,
                Objectifs_Concours:req.body.Objectifs_Concours, 
                Conditions_Acces:req.body.Conditions_Acces,
                Procedure_Selection:req.body.Procedure_Selection,
               
                
            };
    let sql = 'INSERT INTO FiliereInfos SET ?';
    let query = connexion.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
});

/////////////////////////////////////////////////////////
app.get('/annonces', (req, res) => {
    connexion.query('SELECT * FROM annonce ORDER BY Annee_Universitaire DESC', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

app.post('/addannonce', (req, res) => {
    let post = {
                Titre_Annonce:req.body.Titre_Annonce, 
                Annee_Universitaire:req.body.Annee_Universitaire,
                Date_Limite:new Date(req.body.Date_Limite), 
                Date_Resultat_Preinscription:new Date(req.body.Date_Resultat_Preinscription),
                Date_Concours:req.body.Date_Concours ? new Date(req.body.Date_Concours) : null,
                Date_Resultat_Concours: req.body.Date_Resultat_Concours ? new Date(req.body.Date_Resultat_Concours) : null,
                Procédure_Selection:req.body.Procedure_Selection,
                Niveau:req.body.Niveau,
               
                
            };
    let sql = 'INSERT INTO annonce SET ?';
    let query = connexion.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
});

app.delete('/annonces/:id', (req, res) => {
    connexion.query('DELETE FROM annonce WHERE ID_Annonce = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
});
app.put('/annonces/:id', (req, res) => {
    
       
 let   Titre_Annonce=req.body.Titre_Annonce ;
 let  Annee_Universitaire=req.body.Annee_Universitaire
 let  Date_Limite=new Date(req.body.Date_Limite)
 let  Date_Resultat_Preinscription=new Date(req.body.Date_Resultat_Preinscription)
 let  Date_Concours=req.body.Date_Concours ? new Date(req.body.Date_Concours) : null
 let  Date_Resultat_Concours= req.body.Date_Resultat_Concours ? new Date(req.body.Date_Resultat_Concours) : null
 let  Procédure_Selection=req.body.Procedure_Selection
 let  Niveau=req.body.Niveau
        
    
    let sql = "UPDATE annonce SET Titre_Annonce = ? , Annee_Universitaire = ? ,Date_Limite = ? ,Date_Resultat_Preinscription = ? ,Date_Concours = ? ,Date_Resultat_Concours = ? ,Procédure_Selection = ? ,Niveau = ?  WHERE ID_Annonce = ?";
    let query = connexion.query(sql, [Titre_Annonce,Annee_Universitaire,Date_Limite,Date_Resultat_Preinscription,Date_Concours,Date_Resultat_Concours,Procédure_Selection,Niveau,req.params.id],(err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post updated...');
    });
});
/////////////////////////////////////////
app.get('/filieres', (req, res) => {
    connexion.query('SELECT * FROM filière', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

app.post('/addfiliere', (req, res) => {
    let post = {
                ID_Admin:req.body.ID_Admin, 
                Libelle_Filiere:req.body.Libelle_Filiere,
               
                Niveau:req.body.Niveau,
                Nom_Complet:req.body.Nom_Complet,
               
                
            };
    let sql = 'INSERT INTO filière SET ?';
    let query = connexion.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
});
app.delete('/filieres/:id', (req, res) => {
    connexion.query('DELETE FROM filière WHERE ID_Filiere = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
});