import ImgContent_1 from './../image/Content_1.jpeg';
import ImgContent_2 from './../image/Content_2.jpg';
import ImgContent_3 from './../image/Content_3.jpg';
import ImgContent_4 from './../image/Content_4.jpg';


let store = {
    _state: {
        ContentApps: [
            {
                URL: '/Putties',
                Image: ImgContent_1,
                Title: 'Шпаклёвки'
            },
            {
                URL: '/Adhesive_primers',
                Image: ImgContent_2,
                Title: 'Адгезионные грунты'
            }, 
            {
                URL: '/Soils',
                Image: ImgContent_3,
                Title: 'Грунты'
            },        
            {
                URL: '/Lucky',
                Image: ImgContent_4,
                Title: 'Лаки'
            },
            {
                URL: '/Protective_materials',
                Image: ImgContent_1,
                Title: 'Защитные материалы'
            }, 
            {
                URL: '/Special_coatings',
                Image: ImgContent_2,
                Title: 'Специальные покрытия'
            }, 
            {
                URL: '/Supporting_materials',
                Image: ImgContent_3,
                Title: 'Вспом. материалы'
            }, 
            {
                URL: '/Enamels',
                Image: ImgContent_4,
                Title: 'Эмали'
            }, 
            {
                URL: '/Expendable_materials',
                Image: ImgContent_1,
                Title: 'Расходные материалы'
            }, 
        ],
        ContentInfo: {
            Putties: [
            {
                Image: ImgContent_1,
                Title: 'Test image'
            },
            {
                Image: ImgContent_1,
                Title: 'Бежевый'
            }, 
            {
                Image: ImgContent_1,
                Title: 'Бежевый'
            },        
            {
                Image: '',
                Title: 'Бежевый'
            },
            {
                Image: ImgContent_1,
                Title: 'Бежевый'
            }, 
            {
                Image: ImgContent_1,
                Title: 'Бежевый'
            }, 
            {
                Image: ImgContent_1,
                Title: 'Бежевый'
            }, 
            {
                Image: ImgContent_1,
                Title: 'Бежевый'
            }, 
            {
                Image: ImgContent_1,
                Title: 'Бежевый'
            }, 
            {
                Image: ImgContent_1,
                Title: 'Бежевый'
            }, 
            {
                Image: ImgContent_1,
                Title: 'Бежевый'
            }, 
            {
                Image: ImgContent_1,
                Title: 'Бежевый'
            }, 
            {
                Image: ImgContent_1,
                Title: 'Бежевый'
            }

            ],
            Adhesive_primers: [
            {
                Image: '',
                Title: 'Adhesive_primers'
            },
            {
                Image: '',
                Title: 'Adhesive_primers'
            }, 
            {
                Image: '',
                Title: 'Adhesive_primers'
            },        
            {
                Image: '',
                Title: 'Бежевый'
            }  

            ],
            Soils: [
            {
                Image: '',
                Title: 'Soils'
            },
            {
                Image: '',
                Title: 'Soils'
            }, 
            {
                Image: '',
                Title: 'Бежевый'
            },        
            {
                Image: '',
                Title: 'Бежевый'
            }  

            ],
            Lucky: [
            {
                Image: '',
                Title: 'Lucky'
            },
            {
                Image: '',
                Title: 'Бежевый'
            }, 
            {
                Image: '',
                Title: 'Lucky'
            },        
            {
                Image: '',
                Title: 'Бежевый'
            }  

            ],
            Protective_materials: [
                {
                    Image: '',
                    Title: 'Protective_materials'
                },
                {
                    Image: '',
                    Title: 'Protective_materials'
                }, 
                {
                    Image: '',
                    Title: 'Protective_materials'
                },        
                {
                    Image: '',
                    Title: 'Бежевый'
                }  
    
            ],
            Special_coatings: [
                {
                    Image: '',
                    Title: 'Special_coatings'
                },
                {
                    Image: '',
                    Title: 'Special_coatings'
                }, 
                {
                    Image: '',
                    Title: 'Special_coatings'
                },        
                {
                    Image: '',
                    Title: 'Special_coatings'
                }  
    
            ],
            Supporting_materials: [
                {
                    Image: '',
                    Title: 'Supporting_materials'
                },
                {
                    Image: '',
                    Title: 'Supporting_materials'
                }, 
                {
                    Image: '',
                    Title: 'Бежевый'
                },        
                {
                    Image: '',
                    Title: 'Supporting_materials'
                }  
    
            ],
            Enamels: [
                {
                    Image: '',
                    Title: 'Enamels'
                },
                {
                    Image: '',
                    Title: 'Бежевый'
                }, 
                {
                    Image: '',
                    Title: 'Enamels'
                },        
                {
                    Image: '',
                    Title: 'Бежевый'
                }  
    
            ],
            Expendable_materials: [
                {
                    Image: '',
                    Title: 'Expendable_materials'
                },
                {
                    Image: '',
                    Title: 'Expendable_materials'
                }, 
                {
                    Image: '',
                    Title: 'Expendable_materials'
                },        
                {
                    Image: '',
                    Title: 'Бежевый'
                }  
    
            ],
        }, 
    },

    getState() {
        return this._state;
    }

};

export default store;