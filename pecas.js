quadrado=
            {
                x:20,
                y:-25,
                altura:25,
                largura:25,
                cor:"white",
                desenhar:function ()
                {  
                  
                   
                    contexto.fillStyle=this.cor;
                    contexto.fillRect(this.x,this.y,this.largura,this.altura);

                }
            }
            quadradoM=
            {
                pX:115,
                pY:0,
                quadrados:[],
                inserir: function ()
                {
                    for (let i=0;i<4;i++)
                    {
                        this.quadrados.push({
                            x:this.pX,
                            
                            y:this.pY,
                          
                            altura:25,
                            largura:25,
                            cor:"white",
                    })
                    }
                 
                },
                atualisar: function()
                {
                    this.quadrados[0].y=this.pY-this.quadrados[0].altura-25;
                    this.quadrados[1].y=this.pY-this.quadrados[1].altura-25;
                    this.quadrados[2].y=this.pY+3-25;
                    this.quadrados[3].y=this.pY+3-25;
                    this.quadrados[0].x=this.pX;
                    this.quadrados[2].x=this.pX;
                    this.quadrados[1].x=this.pX+28;
                    this.quadrados[3].x=this.pX+28;

            
                },
                desenhar: function ()
                {
                   this.atualisar();
                    for(let i=0;i<4;i++)
                    {
                        contexto.fillStyle=this.quadrados[i].color;
                        contexto.fillRect(this.quadrados[i].x,this.quadrados[i].y,this.quadrados[i].largura,this.quadrados[i].altura);
                        
                    }
                },
                rotacao: function ()
                {
                    
                }
               
            }
            l=
            {
                pX:115,
                pY:115,
                rx:[],
                ry:[],
                estado:0,
                quadrados:[],
                inserir: function ()
                {
                    this.estado=0;
                    for (let i=0;i<4;i++)
                    {
                        this.rx[i]=0;
                        this.ry[i]=0;
                        this.quadrados.push({
                            x:this.pX,
                            y:this.pY,
                            altura:25,
                            largura:25,
                            cor:"white",
                    })
                    }
                 
                },
                atualisar: function()
                {
                    this.quadrados[0].y=this.pY-this.quadrados[0].altura*3-6+this.ry[0];
                    this.quadrados[1].y=this.pY-this.quadrados[1].altura*2-3+this.ry[1];
                    this.quadrados[2].y=this.pY-this.quadrados[2].altura+this.ry[2];
                    this.quadrados[3].y=this.pY-this.quadrados[3].altura+this.ry[3];
                    this.quadrados[0].x=this.pX+this.rx[0];
                    this.quadrados[2].x=this.pX+this.rx[2];
                    this.quadrados[1].x=this.pX+this.rx[1];
                    this.quadrados[3].x=this.pX-28+this.rx[3];
                },
                desenhar: function ()
                {
                    this.atualisar();
                    for(let i=0;i<4;i++)
                    {
                        contexto.fillStyle=this.quadrados[i].color;
                        contexto.fillRect(this.quadrados[i].x,this.quadrados[i].y,this.quadrados[i].largura,this.quadrados[i].altura);
                    }
                },
                rotacao:  function ()
                {
                    if(this.estado==0)
                    {
                    this.rx[0]+=28;
                    this.ry[0]+=28;
                    this.rx[2]-=28;
                    this.ry[2]-=28;
                    this.ry[3]-=56;
                        this.estado=1;    
                    }else if(this.estado==1)
                    {
                        this.rx[0]-=28;
                        this.ry[0]+=28;
                        this.rx[2]+=28;
                        this.ry[2]-=28;
                        this.rx[3]+=56;
                        this.estado=2;
                    }else if (this.estado == 2)
                    {
                        this.rx[0]-=28;
                        this.ry[0]-=28;
                        this.rx[2]+=28;
                        this.ry[2]+=28;
                        this.ry[3]+=56;
                        this.estado=3;
                    }else if (this.estado == 3)
                    {
                        for(var i=0;i<4;i++)
                        {
                            this.rx[i]=0;
                            this.ry[i]=0;
                        }
                        this.estado=0;
                    }
                }
            }
            lInvertido=
            {
                pX:115,
                pY:115,
                rx:[],
                ry:[],
                estado:0,
                quadrados:[],
                inserir: function ()
                {
                    this.estado=0;
                    for (let i=0;i<4;i++)
                    {
                        this.rx[i]=0;
                        this.ry[i]=0;
                        this.quadrados.push({
                            x:this.pX,
                            y:this.pY,
                            altura:25,
                            largura:25,
                            cor:"white",
                    })
                    }
                 
                },
                atualisar: function()
                {
                    this.quadrados[0].y=this.pY-this.quadrados[0].altura*3-6+this.ry[0];
                    this.quadrados[1].y=this.pY-this.quadrados[1].altura*2-3+this.ry[1];
                    this.quadrados[2].y=this.pY-this.quadrados[2].altura+this.ry[2];
                    this.quadrados[3].y=this.pY-this.quadrados[3].altura+this.ry[3];
                    this.quadrados[0].x=this.pX+this.rx[0];
                    this.quadrados[2].x=this.pX+this.rx[2];
                    this.quadrados[1].x=this.pX+this.rx[1];
                    this.quadrados[3].x=this.pX+28+this.rx[3];
                },
                desenhar: function ()
                {
                    this.atualisar();
                    for(let i=0;i<4;i++)
                    {
                        contexto.fillStyle=this.quadrados[i].color;
                        contexto.fillRect(this.quadrados[i].x,this.quadrados[i].y,this.quadrados[i].largura,this.quadrados[i].altura);
                    }
                },
                rotacao:  function ()
                {
                    if(this.estado==0)
                    {
                      
                        this.rx[0]+=28;
                        this.ry[0]+=28;
                        this.rx[2]-=28;
                        this.ry[2]-=28;
                        this.rx[3]-=56;
                  
                        this.estado=1;    
                    }else if(this.estado==1)
                    {
                        this.rx[0]-=28;
                        this.ry[0]+=28;
                        this.rx[2]+=28;
                        this.ry[2]-=28;
                        this.ry[3]-=56;
                       
                        this.estado=2;
                    }else if (this.estado == 2)
                    {
                        this.rx[0]-=28;
                        this.ry[0]-=28;
                        this.rx[2]+=28;
                        this.ry[2]+=28;
                        this.rx[3]+=56;
                        this.estado=3;
                    }else if (this.estado == 3)
                    {
                        for(var i=0;i<4;i++)
                        {
                            this.rx[i]=0;
                            this.ry[i]=0;
                        }
                        this.estado=0;
                    }
                }
            }
            c=
            {
                pX:115,
                pY:115,
                rx:[],
                ry:[],
                estado:0,
                quadrados:[],
                inserir: function ()
                {
                    this.estado=0;
                    for (let i=0;i<4;i++)
                    {
                        this.rx[i]=0;
                        this.ry[i]=0;
                        this.quadrados.push({
                            x:this.pX,
                            y:this.pY,
                            altura:25,
                            largura:25,
                            cor:"white",
                    })
                    }
                 
                },
                atualisar: function()
                {
                    this.quadrados[0].y=this.pY-this.quadrados[0].altura*4-9+this.ry[0];
                    this.quadrados[1].y=this.pY-this.quadrados[1].altura*3-6+this.ry[1];
                    this.quadrados[2].y=this.pY-this.quadrados[2].altura*2-3+this.ry[2];
                    this.quadrados[3].y=this.pY-this.quadrados[3].altura+this.ry[3];
                    this.quadrados[0].x=this.pX+this.rx[0];
                    this.quadrados[2].x=this.pX+this.rx[2];
                    this.quadrados[1].x=this.pX+this.rx[1];
                    this.quadrados[3].x=this.pX+this.rx[3];
                },
                desenhar: function ()
                {
                    this.atualisar();
                    for(let i=0;i<4;i++)
                    {
                        contexto.fillStyle=this.quadrados[i].color;
                        contexto.fillRect(this.quadrados[i].x,this.quadrados[i].y,this.quadrados[i].largura,this.quadrados[i].altura);
                    }
                },
                rotacao:  function ()
                {
                    if(this.estado==0)
                    {
                      this.rx[0]+=28;
                      this.ry[0]+=28;
                      this.rx[2]-=28;
                      this.ry[2]-=28;
                      this.ry[3]-=56;
                      this.rx[3]-=56;
                        this.estado=1;    
                    }else if (this.estado == 1)
                    {
                        for(var i=0;i<4;i++)
                        {
                            this.rx[i]=0;
                            this.ry[i]=0;
                        }
                        this.estado=0;
                    }
                }
            }
            t=
            {
                pX:115,
                pY:115,
                rx:[],
                ry:[],
                estado:0,
                quadrados:[],
                inserir: function ()
                {
                    this.estado=0;
                    for (let i=0;i<4;i++)
                    {
                        this.rx[i]=0;
                        this.ry[i]=0;
                        this.quadrados.push({
                            x:this.pX,
                            y:this.pY,
                            altura:25,
                            largura:25,
                            cor:"white",
                    })
                    }
                 
                },
                atualisar: function()
                {
                    this.quadrados[0].y=this.pY-this.quadrados[0].altura*3-6+this.ry[0];
                    this.quadrados[1].y=this.pY-this.quadrados[1].altura*2-3+this.ry[1];
                    this.quadrados[2].y=this.pY-this.quadrados[2].altura+this.ry[2];
                    this.quadrados[3].y=this.pY-this.quadrados[3].altura*2-3+this.ry[3];
                    this.quadrados[0].x=this.pX+this.rx[0];
                    this.quadrados[2].x=this.pX+this.rx[2];
                    this.quadrados[1].x=this.pX+this.rx[1];
                    this.quadrados[3].x=this.pX-28+this.rx[3];
                },
                desenhar: function ()
                {
                    this.atualisar();
                    for(let i=0;i<4;i++)
                    {
                        contexto.fillStyle=this.quadrados[i].color;
                        contexto.fillRect(this.quadrados[i].x,this.quadrados[i].y,this.quadrados[i].largura,this.quadrados[i].altura);
                    }
                },
                rotacao:  function ()
                {
                    if(this.estado==0)
                    {
                    this.rx[0]+=28;
                    this.ry[0]+=28;
                    this.rx[2]-=28;
                    this.ry[2]-=28;
                    this.ry[3]-=28;
                    this.rx[3]+=28;
                        this.estado=1;    
                    }else if(this.estado==1)
                    {
                        this.rx[0]-=28;
                        this.ry[0]+=28;
                        this.rx[2]+=28;
                        this.ry[2]-=28;
                        this.ry[3]+=28;
                        this.rx[3]+=28;
                        this.estado=2;
                    }else if (this.estado == 2)
                    {
                        this.rx[0]-=28;
                        this.ry[0]-=28;
                        this.rx[2]+=28;
                        this.ry[2]+=28;
                        this.ry[3]+=28;
                        this.rx[3]-=28;
                        this.estado=3;
                    }else if (this.estado == 3)
                    {
                        for(var i=0;i<4;i++)
                        {
                            this.rx[i]=0;
                            this.ry[i]=0;
                        }
                        this.estado=0;
                    }
                }
            }
            s=
            {
                pX:115,
                pY:115,
                rx:[],
                ry:[],
                estado:0,
                quadrados:[],
                inserir: function ()
                {
                    this.estado=0;
                    for (let i=0;i<4;i++)
                    {
                        this.rx[i]=0;
                        this.ry[i]=0;
                        this.quadrados.push({
                            x:this.pX,
                            y:this.pY,
                            altura:25,
                            largura:25,
                            cor:"white",
                    })
                    }
                 
                },
                atualisar: function()
                {
                    this.quadrados[0].y=this.pY-this.quadrados[0].altura*2-3+this.ry[0];
                    this.quadrados[1].y=this.pY-this.quadrados[1].altura*2-3+this.ry[1];
                    this.quadrados[2].y=this.pY-this.quadrados[2].altura+this.ry[2];
                    this.quadrados[3].y=this.pY-this.quadrados[3].altura+this.ry[3];
                    this.quadrados[0].x=this.pX-this.quadrados[0].altura-3+this.rx[0];
                    this.quadrados[2].x=this.pX+this.rx[2];
                    this.quadrados[1].x=this.pX+this.rx[1];
                    this.quadrados[3].x=this.pX+28+this.rx[3];
                },
                desenhar: function ()
                {
                    this.atualisar();
                    for(let i=0;i<4;i++)
                    {
                        contexto.fillStyle=this.quadrados[i].color;
                        contexto.fillRect(this.quadrados[i].x,this.quadrados[i].y,this.quadrados[i].largura,this.quadrados[i].altura);
                    }
                },
                rotacao:  function ()
                {
                    if(this.estado==0)
                    {
                    this.rx[0]+=28;
                    this.ry[0]-=28;
                    this.rx[2]-=28;
                    this.ry[2]-=28;
                    
                    this.rx[3]-=56;
                        this.estado=1;    
                    }else if(this.estado==1)
                    {
                        this.rx[0]+=28;
                        this.ry[0]+=28;
                        this.rx[2]+=28;
                        this.ry[2]-=28;
                        this.ry[3]-=56;
                        this.estado=2;
                    }
                    else if (this.estado == 2)
                    {
                        for(var i=0;i<4;i++)
                        {
                            this.rx[i]=0;
                            this.ry[i]=0;
                        }
                        this.estado=0;
                    }
                }
            }
            
            sInvertido=
            {
                pX:115,
                pY:115,
                rx:[],
                ry:[],
                estado:0,
                quadrados:[],
                inserir: function ()
                {
                    this.estado=0;
                    for (let i=0;i<4;i++)
                    {
                        this.rx[i]=0;
                        this.ry[i]=0;
                        this.quadrados.push({
                            x:this.pX,
                            y:this.pY,
                            altura:25,
                            largura:25,
                            cor:"white",
                    })
                    }
                 
                },
                atualisar: function()
                {
                    this.quadrados[0].y=this.pY-this.quadrados[0].altura*2-3+this.ry[0];
                    this.quadrados[1].y=this.pY-this.quadrados[1].altura*2-3+this.ry[1];
                    this.quadrados[2].y=this.pY-this.quadrados[2].altura+this.ry[2];
                    this.quadrados[3].y=this.pY-this.quadrados[3].altura+this.ry[3];
                    this.quadrados[0].x=this.pX+this.quadrados[0].altura+3+this.rx[0];
                    this.quadrados[2].x=this.pX+this.rx[2];
                    this.quadrados[1].x=this.pX+this.rx[1];
                    this.quadrados[3].x=this.pX-28+this.rx[3];
                },
                desenhar: function ()
                {
                    this.atualisar();
                    for(let i=0;i<4;i++)
                    {
                        contexto.fillStyle=this.quadrados[i].color;
                        contexto.fillRect(this.quadrados[i].x,this.quadrados[i].y,this.quadrados[i].largura,this.quadrados[i].altura);
                    }
                },
                rotacao:  function ()
                {
                    if(this.estado==0)
                    {
                    this.rx[0]-=28;
                    this.ry[0]+=28;
                    this.rx[2]-=28;
                    this.ry[2]-=28;
                    
                    this.ry[3]-=56;
                        this.estado=1;    
                    }
                    else if (this.estado == 1)
                    {
                        for(var i=0;i<4;i++)
                        {
                            this.rx[i]=0;
                            this.ry[i]=0;
                        }
                        this.estado=0;
                    }
                }
            }