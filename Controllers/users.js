
const fs = require("fs");
const jsonData = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
const users = jsonData.users;

exports. create=(req,res)=>{
  users.push(req.body)
 res.status(201).json(req.body)
}

exports. getAll=(req,res)=>{
  res.status(200).json(users)
}

exports. getSingle=(req,res)=>{
  const id=Number(req.params.id)
  const matchedUser= users.find((prod)=>{return prod.id===id})
  res.status(200).json(matchedUser)
}

exports. replace=(req,res)=>{
  const id=Number(req.params.id)
  const userIndex=users.findIndex((prod)=>{return prod.id===id})
  users.splice(userIndex,1,{...req.body,id})
  res.status(202).json(users[userIndex])
}

exports. update=(req,res)=>{
  const id=Number(req.params.id)
  const userIndex=users.findIndex((prod)=>{return prod.id===id})
  users.splice(userIndex,1,{...users[userIndex],...req.body})
  res.status(202).json(users[userIndex])
  
}

exports. remove=(req, res) => {
  const id = Number(req.params.id);
  const userIndex = users.findIndex((prod) => {
    return prod.id === id;
  });
  const product = users[userIndex];
  users.splice(userIndex, 1);
  res.status(200).json(product);
}