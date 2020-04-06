!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){const o=n(6)(n(7).development);e.exports=o},function(e,t){e.exports=require("express")},function(e,t,n){const o=n(1),i=n(3),s=n(4),r=o();r.use(i()),r.use(o.json()),r.use(s),r.listen(3333)},function(e,t){e.exports=require("cors")},function(e,t,n){const o=n(1),i=n(5),s=n(9),r=n(10),a=n(11),c=o.Router();c.post("/sessions",a.create),c.get("/ongs",i.index),c.post("/ongs",i.create),c.get("/profile",r.index),c.get("/incidents",s.index),c.post("/incidents",s.create),c.delete("/incidents/:id",s.delete),e.exports=c},function(e,t,n){const o=n(0),i=n(8);e.exports={async index(e,t){const n=await o("ongs").select("*");return t.json(n)},async create(e,t){const{nome:n,email:s,whatsapp:r,city:a,uf:c}=e.body,u=i.randomBytes(4).toString("HEX");return await o("ongs").insert({id:u,nome:n,email:s,whatsapp:r,city:a,uf:c}),t.json({id:u})}}},function(e,t){e.exports=require("knex")},function(e,t){e.exports={development:{client:"mysql",connection:{host:"mysql5019.site4now.net",user:"a4c915_react",password:"react0000",database:"db_a4c915_react"},useNullAsDefault:!0,pool:{min:2,max:10},migrations:{diretory:"/migrations",tableName:"knex_migrations"}},staging:{client:"mssql",connection:{host:"sql5045.site4now.net",user:"DB_A4C915_react_admin",password:"react0000",database:"DB_A4C915_react",options:{encrypt:!1,enableArithAbort:!0}},pool:{min:2,max:10},migrations:{diretory:"/migrations",tableName:"knex_migrations"}},production:{client:"postgresql",connection:{database:"my_db",user:"username",password:"password"},pool:{min:2,max:10},migrations:{tableName:"knex_migrations"}}}},function(e,t){e.exports=require("crypto")},function(e,t,n){const o=n(0);e.exports={async index(e,t){const{page:n=1}=e.query,[i]=await o("incidents").count();console.log(i);const s=await o("incidents").join("ongs","ongs.id","=","incidents.ong_id").limit(5).offset(5*(n-1)).select(["incidents.*","ongs.nome","ongs.email","ongs.whatsapp","ongs.city","ongs.uf"]);return t.header("X-Total-count",i["count(*)"]),t.json(s)},async create(e,t){const{title:n,description:i,value:s}=e.body;e.headers;const r=e.headers.authorization;console.log([n,i,s,r]);const[a]=await o("incidents").insert({title:n,description:i,value:s,ong_id:r});return console.log(a),t.json({id:a})},async delete(e,t){const{id:n}=e.params,i=e.headers.authorization;return(await o("incidents").where("id",n).select("ong_id").first()).ong_id!=i?t.status(401).json({error:"Operation not permitted."}):(await o("incidents").where("id",n).delete(),t.status(201).send())}}},function(e,t,n){const o=n(0);e.exports={async index(e,t){const n=e.headers.authorization,i=await o("incidents").where("ong_id",n).select("*");return t.json(i)}}},function(e,t,n){const o=n(0);e.exports={async create(e,t){const{id:n}=e.body,i=await o("ongs").where("id",n).select("nome").first();return i?t.json(i):t.send(404).json({error:"No ONG found with this id "})}}}]);