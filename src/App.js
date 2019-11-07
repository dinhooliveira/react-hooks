import React, {useEffect, useState} from 'react';
import './App.css';
import {List, Button, Modal, Drawer, Divider, Layout, Content} from "antd";

export default function App() {

    const [usuarioPerfil, setUsuarioPerfil] = useState({})
    const [usuarios, setUsuarios] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loadingUsuarios, setLoadingUsuarios] = useState(false);
    const [loadingPosts, setLoadingPosts] = useState(false);
    const [comentarios, setComentarios] = useState([]);
    const [showModalComentarios, setShowModalPostsComentarios] = useState(false);
    const [showModalPosts, setShowModalPosts] = useState(false);
    const [showUsuarioPerfil, setShowUsuarioPerfil] = useState(false);
    const {Header, Footer, Sider, Content} = Layout;

    useEffect(() => {

        getUsuarios();

    }, []);

    async function getUsuarios() {
        const resp = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await resp.json();
        setUsuarios(data);
    }

    async function verPosts(id) {
        setLoadingUsuarios(true);
        const resp = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        const data = await resp.json();
        setLoadingUsuarios(false);
        setPosts(data);
        openModalPosts();
    }

    async function verComentarios(id) {
        setLoadingPosts(true);
        const resp = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
        const data = await resp.json();
        setLoadingPosts(false);
        setComentarios(data);
        openModalComentarios();
    }

    function openModalPosts() {
        setShowModalPosts(true);
    }

    function closeModalPosts() {
        setShowModalPosts(false);
    }

    function openModalComentarios() {
        setShowModalPostsComentarios(true);
    }

    function closeModalComentarios() {
        setShowModalPostsComentarios(false);
    }

    function openPerfil(obj) {
        setUsuarioPerfil(obj);
        setShowUsuarioPerfil(true);
    }

    function closePerfil() {
        setUsuarioPerfil({});
        setShowUsuarioPerfil(false);
    }

    return (
        <Layout style={{background: "#fff"}}>
            <Header>
                <h1 style={{color: "#fff", textAlign: 'center'}}>REACT HOOKS TESTE DO DINHO</h1>
            </Header>
            <Content>
                <List
                    loading={loadingUsuarios}
                    header="Usuários"
                    style={{margin: '24px 24px 24px 24px'}}
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 5,
                    }}
                    dataSource={usuarios}
                    bordered
                    renderItem={item => (
                        <List.Item
                            action={[]}
                        >
                            <b>Nome:</b> {item.name}<br/>
                            <b>Usuário:</b> {item.username}<br/>
                            <b>E-mail</b> {item.email}<br/>
                            <Button type="primary" icon="user" style={{marginRight: '4px'}} onClick={() => {
                                openPerfil(item)
                            }}>Perfil</Button>

                            <Button type="success" icon="message" style={{marginRight: '4px'}} onClick={() => {
                                verPosts(item.id)
                            }}>Posts</Button>


                        </List.Item>
                    )}/>

                <Drawer
                    visible={showUsuarioPerfil}
                    onClose={closePerfil}
                >
                    <h3 style={{textAlign: 'center'}}>Dados Pessoais</h3>
                    <Divider/>
                    <b>Nome</b>: <br/>{usuarioPerfil.name}<br/>
                    <b>Usuário</b>: <br/> {usuarioPerfil.username}<br/>
                    <b>Telefone</b>: <br/>{usuarioPerfil.phone}<br/>
                    <b>E-mail</b>: <br/>{usuarioPerfil.email}<br/>
                    <b>Site</b>: <br/>{usuarioPerfil.website}<br/>

                    <Divider/>
                    <h3 style={{textAlign: 'center'}}>Empresa</h3>
                    <Divider/>
                    <b>Nome</b>: <br/>{usuarioPerfil.company ? usuarioPerfil.company.name : ''}<br/>
                    <b>Frase de busca </b>: <br/>{usuarioPerfil.company ? usuarioPerfil.company.catchPhrase : ''}<br/>
                    <b>BS</b>: <br/>{usuarioPerfil.company ? usuarioPerfil.company.bs : ''}<br/>

                    <Divider/>
                    <h3 style={{textAlign: 'center'}}>Endereço</h3>
                    <Divider/>
                    <b>Rua</b>: <br/>{usuarioPerfil.address ? usuarioPerfil.address.street : ''}<br/>
                    <b>Logradouro</b>: <br/>{usuarioPerfil.address ? usuarioPerfil.address.suite : ''}<br/>
                    <b>Cidade</b>: <br/>{usuarioPerfil.address ? usuarioPerfil.address.city : ''}<br/>
                    <b>Codigo Postal </b>: <br/>{usuarioPerfil.address ? usuarioPerfil.address.zipcode : ''}<br/>
                </Drawer>

                <Modal
                    width="90%"
                    visible={showModalPosts}
                    onCancel={closeModalPosts}
                    footer=""
                >
                    <List loading={loadingPosts}

                          pagination={{
                              onChange: page => {
                                  console.log(page);
                              },
                              pageSize: 5,
                          }}
                          header="posts"
                          style={{margin: '24px 24px 24px 24px'}}
                          dataSource={posts}
                          bordered
                          renderItem={item => (
                              <List.Item>
                                  <b>Titulo:</b> {item.title}<br/>
                                  <Button type="primary" icon="comment" onClick={() => {

                                      verComentarios(item.id)
                                  }}>Comentarios</Button>
                              </List.Item>)}
                    />
                </Modal>

                <Modal
                    visible={showModalComentarios}
                    onCancel={closeModalComentarios}
                    footer=""
                >
                    <List

                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 5,
                        }}
                        header="Comentarios"
                        style={{margin: '24px 24px 24px 24px'}}
                        dataSource={comentarios}
                        bordered
                        renderItem={item => (
                            <List.Item>
                                <b>Nome:</b> {item.name}<br/>
                                <b>E-mail:</b> {item.email}<br/>
                                <b>Comentario:</b> {item.body}<br/>
                            </List.Item>)}
                    />
                </Modal>
            </Content>
        </Layout>
    );
}


