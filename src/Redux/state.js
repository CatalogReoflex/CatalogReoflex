import PuttiesImg_1 from './../image/Putties/img_1.webp';
import PuttiesImg_2 from './../image/Putties/img_2.webp';
import PuttiesImg_3 from './../image/Putties/img_3.webp';
import PuttiesImg_4 from './../image/Putties/img_4.webp';
import PuttiesImg_5 from './../image/Putties/img_5.webp';
import PuttiesImg_6 from './../image/Putties/img_6.webp';

import Adhesive_primers_Img_1 from './../image/Adhesive_primers/img_1.webp';
import Adhesive_primers_Img_2 from './../image/Adhesive_primers/img_2.webp';
import Adhesive_primers_Img_3 from './../image/Adhesive_primers/img_3.webp';
import Adhesive_primers_Img_4 from './../image/Adhesive_primers/img_4.webp';
import Adhesive_primers_Img_5 from './../image/Adhesive_primers/img_5.webp';
import Adhesive_primers_Img_6 from './../image/Adhesive_primers/img_6.webp';
import Adhesive_primers_Img_7 from './../image/Adhesive_primers/img_7.webp';
import Adhesive_primers_Img_8 from './../image/Adhesive_primers/img_8.webp';
import Adhesive_primers_Img_9 from './../image/Adhesive_primers/img_9.webp';

import Soils_Img_1 from './../image/Soils/img_1.webp';
import Soils_Img_2 from './../image/Soils/img_2.webp';
import Soils_Img_3 from './../image/Soils/img_3.webp';
import Soils_Img_4 from './../image/Soils/img_4.webp';
import Soils_Img_5 from './../image/Soils/img_5.webp';
import Soils_Img_6 from './../image/Soils/img_6.webp';
import Soils_Img_7 from './../image/Soils/img_7.webp';

import Lucky_Img_1 from './../image/Lucky/img_1.webp';
import Lucky_Img_2 from './../image/Lucky/img_2.webp';
import Lucky_Img_3 from './../image/Lucky/img_3.webp';
import Lucky_Img_4 from './../image/Lucky/img_4.webp';
import Lucky_Img_5 from './../image/Lucky/img_5.webp';
import Lucky_Img_6 from './../image/Lucky/img_6.webp';
import Lucky_Img_7 from './../image/Lucky/img_7.webp';
import Lucky_Img_8 from './../image/Lucky/img_8.webp';
import Lucky_Img_9 from './../image/Lucky/img_9.webp';

import Protective_materials_Img_1 from './../image/Protective_materials/img_1.webp';
import Protective_materials_Img_2 from './../image/Protective_materials/img_2.webp';
import Protective_materials_Img_3 from './../image/Protective_materials/img_3.webp';
import Protective_materials_Img_4 from './../image/Protective_materials/img_4.webp';
import Protective_materials_Img_5 from './../image/Protective_materials/img_5.webp';

import Special_coatings_Img_1 from './../image/Special_coatings/img_1.webp';
import Special_coatings_Img_2 from './../image/Special_coatings/img_2.webp';
import Special_coatings_Img_3 from './../image/Special_coatings/img_3.webp';
import Special_coatings_Img_4 from './../image/Special_coatings/img_4.webp';
import Special_coatings_Img_5 from './../image/Special_coatings/img_5.webp';
import Special_coatings_Img_6 from './../image/Special_coatings/img_6.webp';

import Supporting_materials_Img_1 from './../image/Supporting_materials/img_1.webp';
import Supporting_materials_Img_2 from './../image/Supporting_materials/img_2.webp';
import Supporting_materials_Img_3 from './../image/Supporting_materials/img_3.webp';
import Supporting_materials_Img_4 from './../image/Supporting_materials/img_4.webp';
import Supporting_materials_Img_5 from './../image/Supporting_materials/img_5.webp';


let store = {
    _state: {
        ContentApps: [
            {
                URL: '/PuttiesTypes',
                Image: PuttiesImg_1,
                Title: 'Шпаклёвки',
                Color: "#5951B5",
                Shadow: "3px 3px 4px rgba(89,81,181, 0.7)"
            },
            {
                URL: '/Adhesive_primers',
                Image: PuttiesImg_5,
                Title: 'Адгезионные грунты',
                Color: "#E91E63",
                Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
            }, 
            {
                URL: '/Soils',
                Image: PuttiesImg_3,
                Title: 'Грунты',
                Color: "#9C27B0",
                Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
            },        
            {
                URL: '/Lucky',
                Image: PuttiesImg_4,
                Title: 'Лаки',
                Color: "#2196F3",
                Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
            },
            {
                URL: '/Protective_materials',
                Image: PuttiesImg_2,
                Title: 'Защитные материалы',
                Color: "#673AB7",
                Shadow: "3px 3px 4px rgba(103,58,183, 0.7)"
            }, 
            {
                URL: '/Special_coatings',
                Image: PuttiesImg_6,
                Title: 'Специальные покрытия',
                Color: "#00BCD4",
                Shadow: "3px 3px 4px rgba(0,188,212, 0.7)"
            }, 
            {
                URL: '/Supporting_materials',
                Image: PuttiesImg_1,
                Title: 'Вспом. материалы',
                Color: "#E91E63",
                Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
            }, 
            {
                URL: '/Enamels',
                Image: PuttiesImg_2,
                Title: 'Эмали',
                Color: "#9C27B0",
                Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
            }, 
            {
                URL: '/Expendable_materials',
                Image: PuttiesImg_3,
                Title: 'Расходные материалы',
                Color: "#3F51B5",
                Shadow: "3px 3px 4px rgba(63,81,181, 0.7)"
            }, 
        ],
        TypesProducts: {
            PuttiesTypes: [
            {
                URL: '/Universal putty',
                Image: PuttiesImg_1,
                Title: 'Шпатлёвка универсальная',
                Color: "#5951B5",
                Shadow: "3px 3px 4px rgba(89,81,181, 0.7)"
            },
            {
                URL: '/FinelyDispersedPutty',
                Image: PuttiesImg_2,
                Title: 'Шпатлёвка мелкодисперсная',
                Color: "#E91E63",
                Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
            }, 
            {
                URL: '/PuttyWithAluminum',
                Image: PuttiesImg_3,
                Title: 'Шпатлёвка с алюминием',
                Color: "#9C27B0",
                Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
            },        
            {
                URL: '/GlassFiberPutty',
                Image: PuttiesImg_4,
                Title: 'Шпатлёвка со стекловолокном',
                Color: "#2196F3",
                Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
            },
            {
                URL: '/CarbonFiberPutty',
                Image: PuttiesImg_5,
                Title: 'Шпатлёвка с углеволокном',
                Color: "#673AB7",
                Shadow: "3px 3px 4px rgba(103,58,183, 0.7)"
            }, 
            {
                URL: '/SprayPutty',
                Image: PuttiesImg_6,
                Title: 'Распыляемая шпатлёвка',
                Color: "#00BCD4",
                Shadow: "3px 3px 4px rgba(0,188,212, 0.7)"
            }
        ],           
            Adhesive_primers: [
            {
                URL: '/EpoxyPrimer',
                Image: Adhesive_primers_Img_1,
                Title: 'Эпоксидный грунт',
                Color: "#5951B5",
                Shadow: "3px 3px 4px rgba(89,81,181, 0.7)"
            },
            {
                URL: '/PhosphatingPrimerCF1+1',
                Image: Adhesive_primers_Img_2,
                Title: 'Фосфатирующий грунт CF 1+1',
                Color: "#E91E63",
                Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
            }, 
            {
                URL: '/PhosphatingPrimerCF',
                Image: Adhesive_primers_Img_3,
                Title: 'Фосфатирующий грунт CF',
                Color: "#9C27B0",
                Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
            },
            {
                URL: '/SandingPrimerAerosol',
                Image: Adhesive_primers_Img_4,
                Title: 'Грунт для прошлифовки аэрозоль',
                Color: "#9C27B0",
                Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
            },        
            {
                URL: '/AlkydPrimer',
                Image: Adhesive_primers_Img_5,
                Title: 'Алкидный грунт',
                Color: "#2196F3",
                Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
            },
            {
                URL: '/Insulator',
                Image: Adhesive_primers_Img_6,
                Title: 'Изолятор',
                Color: "#673AB7",
                Shadow: "3px 3px 4px rgba(103,58,183, 0.7)"
            }, 
            {
                URL: '/PrimerOnPlastic',
                Image: Adhesive_primers_Img_7,
                Title: 'Грунт по пластмассе',
                Color: "#00BCD4",
                Shadow: "3px 3px 4px rgba(0,188,212, 0.7)"
            },        
            {
                URL: '/PrimerOnPlasticSpray',
                Image: Adhesive_primers_Img_8,
                Title: 'Грунт по пластм. аэрозоль',
                Color: "#2196F3",
                Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
            },
            {
                URL: '/PrimerOnPlastic5+1',
                Image: Adhesive_primers_Img_9,
                Title: 'Грунт по пластмассе 5+1',
                Color: "#673AB7",
                Shadow: "3px 3px 4px rgba(103,58,183, 0.7)"
            }
        ],
            Soils: [
            {
                URL: '/AcrylicPrimer3',
                Image: Soils_Img_1,
                Title: 'Акриловый грунт 3+1',
                Color: "#5951B5",
                Shadow: "3px 3px 4px rgba(89,81,181, 0.7)"
            },
            {
                URL: '/AcrylicPrimer4',
                Image: Soils_Img_2,
                Title: 'Акриловый грунт 4+1',
                Color: "#E91E63",
                Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
            }, 
            {
                URL: '/Direct_to_metalPrimer4',
                Image: Soils_Img_3,
                Title: 'Грунт “прямо на металл” 4+1',
                Color: "#9C27B0",
                Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
            },        
            {
                URL: '/AcrylicPrimer5',
                Image: Soils_Img_4,
                Title: 'Акриловый грунт 5+1',
                Color: "#2196F3",
                Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
            },
            {
                URL: '/AcrylicPrimer',
                Image: Soils_Img_5,
                Title: 'Акриловый грунт',
                Color: "#673AB7",
                Shadow: "3px 3px 4px rgba(103,58,183, 0.7)"
            }, 
            {
                URL: '/AcrylicPrimerAerosol',
                Image: Soils_Img_6,
                Title: 'Акриловый грунт аэрозоль',
                Color: "#00BCD4",
                Shadow: "3px 3px 4px rgba(0,188,212, 0.7)"
            },        
            {
                URL: '/UHS_fast_primer',
                Image: Soils_Img_7,
                Title: 'Быстрый грунт UHS',
                Color: "#2196F3",
                Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
            },
        ],           
            Lucky: [
        {
            URL: '/Acrylic_lacquer_HS_Superio_RX_C_14',
            Image: Lucky_Img_1,
            Title: 'Акриловый лак HS Superio RX C-14',
            Color: "#5951B5",
            Shadow: "3px 3px 4px rgba(89,81,181, 0.7)"
        },
        {
            URL: '/Acrylic_lacquer_HS_Superio_RX_C_12',
            Image: Lucky_Img_2,
            Title: 'Акриловый лак SR Clear RX C-12',
            Color: "#E91E63",
            Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
        }, 
        {
            URL: '/Acrylic_lacquer_HS_RX_C_02',
            Image: Lucky_Img_3,
            Title: 'Акриловый лак HS',
            Color: "#9C27B0",
            Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
        },
        {
            URL: '/Acrylic_varnish_MS_RX_C_01',
            Image: Lucky_Img_4,
            Title: 'Акриловый лак MS RX C-01',
            Color: "#9C27B0",
            Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
        },        
        {
            URL: '/Optim_acrylic_varnish',
            Image: Lucky_Img_5,
            Title: 'Акриловый лак Optim',
            Color: "#2196F3",
            Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
        },
        {
            URL: '/Acrylic_varnish_MS_RX_C_03',
            Image: Lucky_Img_6,
            Title: 'Акриловый лак MS RX C-03',
            Color: "#673AB7",
            Shadow: "3px 3px 4px rgba(103,58,183, 0.7)"
        }, 
        {
            URL: '/Acrylic_varnish_MS_RX_C_06',
            Image: Lucky_Img_7,
            Title: 'Акриловый лак MS RX C-06',
            Color: "#00BCD4",
            Shadow: "3px 3px 4px rgba(0,188,212, 0.7)"
        },        
        {
            URL: '/Super_fast_varnish_RX_C_07',
            Image: Lucky_Img_8,
            Title: 'Супербыстрый лак RX C-07',
            Color: "#2196F3",
            Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
        },
        {
            URL: '/Acrylic_varnish_MS_aerosol_RX_C_04',
            Image: Lucky_Img_9,
            Title: 'Акриловый лак MS аэрозоль RX C-04',
            Color: "#673AB7",
            Shadow: "3px 3px 4px rgba(103,58,183, 0.7)"
        }
        ],
            Protective_materials: [
            {
                URL: '/Antigravel_HS_GraviPro_RX_N_09',
                Image: Protective_materials_Img_1,
                Title: 'Антигравий HS GraviPro RX N-09',
                Color: "#5951B5",
                Shadow: "3px 3px 4px rgba(89,81,181, 0.7)"
            },
            {
                URL: '/Antigravel_HS_aerosol_HS_GraviPro_Spray_RX_N_09',
                Image: Protective_materials_Img_2,
                Title: 'Антигравий HS аэрозоль HS GraviPro Spray RX N-09',
                Color: "#E91E63",
                Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
            }, 
            {
                URL: '/Brush_Sealan_RX_P_10',
                Image: Protective_materials_Img_3,
                Title: 'Шовный кистевой герметик Brush Sealant RX P-10',
                Color: "#9C27B0",
                Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
            },        
            {
                URL: '/Polyester_resin_Repair_Resin_RX_N_04',
                Image: Protective_materials_Img_4,
                Title: 'Полиэфирная смола Repair Resin RX N-04',
                Color: "#2196F3",
                Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
            },
            {
                URL: '/Repair_kit_Repair_Box_RX_N_07',
                Image: Protective_materials_Img_5,
                Title: 'Ремонтный комплект Repair Box RX N-07',
                Color: "#673AB7",
                Shadow: "3px 3px 4px rgba(103,58,183, 0.7)"
            }
        ],
            Special_coatings: [
            {
                URL: '/Structure_Coat_RX_P_07',
                Image: Special_coatings_Img_1,
                Title: 'Структурное покрытие Structure Coat RX P-07',
                Color: "#5951B5",
                Shadow: "3px 3px 4px rgba(89,81,181, 0.7)"
            },
            {
                URL: '/Enamel_for_bumpers_Bumper_Paint_RX_P_11',
                Image: Special_coatings_Img_2,
                Title: 'Эмаль для бамперов Bumper Paint RX P-11',
                Color: "#E91E63",
                Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
            }, 
            {
                URL: '/Enamel_for_bumpers_aerosol_Bumper_Paint_Spray_RX_P_11',
                Image: Special_coatings_Img_3,
                Title: 'Эмаль для бамперов аэрозоль Bumper Paint Spray RX P-11',
                Color: "#9C27B0",
                Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
            },        
            {
                URL: '/Primer_enamel_DTM_Coat_RX_E_01',
                Image: Special_coatings_Img_4,
                Title: 'Грунт-эмаль DTM Сoat RX E-01',
                Color: "#2196F3",
                Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
            },
            {
                URL: '/Acrylic_enamel_aerosol_Acryl_Top_Spray_RX_E_03',
                Image: Special_coatings_Img_5,
                Title: 'Акриловая эмаль аэрозоль Acryl Top Spray RX E-03',
                Color: "#673AB7",
                Shadow: "3px 3px 4px rgba(103,58,183, 0.7)"
            }, 
            {
                URL: '/Enamel_for_disks_aerosol_Disk_Top_Spray_RX_E_02',
                Image: Special_coatings_Img_6,
                Title: 'Эмаль для дисков аэрозоль Disk Top Spray RX E-02',
                Color: "#00BCD4",
                Shadow: "3px 3px 4px rgba(0,188,212, 0.7)"
            }
        ], 
            Supporting_materials: [
            {
                URL: '/Base_Coat_RX_B_01_base_enamel',
                Image: Supporting_materials_Img_1,
                Title: 'Эмаль базовая Base Coat RX B-01',
                Color: "#5951B5",
                Shadow: "3px 3px 4px rgba(89,81,181, 0.7)"
            },
            {
                URL: '/Blender_RX_T_05_Transition_Base',
                Image: Supporting_materials_Img_2,
                Title: 'База для переходов Blender RX T-05',
                Color: "#E91E63",
                Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
            }, 
            {
                URL: '/Acrylic_Acryl_Top_RX_E_03_enamel',
                Image: Supporting_materials_Img_3,
                Title: 'Акриловая эмаль Acryl Top RX E-03',
                Color: "#9C27B0",
                Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
            },        
            {
                URL: '/Avtolak_RX_E_04_air_drying_auto_enamel',
                Image: Supporting_materials_Img_4,
                Title: 'Автоэмаль воздушной сушки Avtolak RX E-04',
                Color: "#2196F3",
                Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
            },
            {
                URL: '/Auto_enamel_air_drying_aerosol_Avtolak_Spray_RX_E_04',
                Image: Supporting_materials_Img_5,
                Title: 'Автоэмаль воздушной сушки аэрозоль Avtolak Spray RX E-04',
                Color: "#673AB7",
                Shadow: "3px 3px 4px rgba(103,58,183, 0.7)"
            }
        ]
    },
        PuttiesInfo: {
            UniversalPutty: {
                HeadInfo: {
                        Image: PuttiesImg_1,
                        Title: 'Шпатлёвка универсальная Putty Multi RX S-01',
                },
                MainInfo: [
                    {
                        Title: 'Универсальная выравнивающая полиэфирная шпатлёвка применяется в качестве наполняющей шпатлевки. Легко шлифуется, отличается эластичностью.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: бежевый',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,6 кг; 1кг; 2 кг',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(b) VOC 120 g/l, VOC limit 250 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            FinelyDispersedPutty: {
                HeadInfo: {
                    Image: PuttiesImg_2,
                    Title: 'Шпатлёвка мелкодисперсная Putty Soft RX S-02',
                },
                MainInfo: [
                    {
                        Title: 'Мелкозернистая полиэфирная шпатлёвка с высокой наполняющей способностью предназначена для устранения неглубоких неровностей и для создания ровной однородной поверхности. Шпатлевка мягкая в обработке, что позволяет быстро выравнивать даже очень большие площади поверхности, как при ручной обработке, так и с применением шлифовальной машинки.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: бежевый',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,6 кг; 1 кг; 2 кг',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(b) VOC 120 g/l, VOC limit 250 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            PuttyWithAluminum: {
                HeadInfo: {
                    Image: PuttiesImg_3,
                    Title: 'Шпатлёвка с алюминием Putty Alumet RX S-04',
                },
                MainInfo: [
                    {
                        Title: 'Наполняющая полиэфирная шпатлёвка c частицами алюминия предназначена для устранения глубоких неровностей и мелких дефектов на поверхностях, подверженных температурному и вибрационному воздействию.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: серый',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,6 кг; 1кг; 2 кг',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(b) VOC 120 g/l, VOC limit 250 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            GlassFiberPutty: {
                HeadInfo: {
                        Image: PuttiesImg_4,
                        Title: 'Шпатлёвка со стекловолокном Putty Glass Fiber RX S-05',
                },
                MainInfo: [
                    {
                        Title: 'Наполняющая полиэфирная шпатлёвка, усиленная стекловолокном, предназначена для выравнивания глубоких вмятин и сквозных повреждений деталей. Имеет высокую механическую прочность.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: зелёный',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,5 кг; 1кг; 2 кг',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(b) VOC 120 g/l, VOC limit 250 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            CarbonFiberPutty: {
                HeadInfo: {
                    Image: PuttiesImg_5,
                    Title: 'Шпатлёвка с углеволокном Putty Flex Carbon RX S-08',
                },
                MainInfo: [
                    {
                        Title: 'Наполняющая полиэфирная шпатлёвка, усиленная углеволокном, предназначена для ремонта металлических и пластиковых деталей. Отличается особой прочностью и эластичностью.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: черный',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,5 кг; 1кг; 2 кг',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(b) VOC 120 g/l, VOC limit 250 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            SprayPutty: {
                HeadInfo: {
                    Image: PuttiesImg_6,
                    Title: 'Распыляемая шпатлёвка Polyester Stopper RX F-05',
                },
                MainInfo: [
                    {
                        Title: 'Двухкомпонентная полиэфирная распыляемая шпатлёвка с хорошими наполняющими свойствами предназначена для заполнения пор и неровностей грубо обработанных поверхностей. Шпатлёвка наносится распылением. Исключительно легко шлифуется, характеризуется коротким временем сушки.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: серый',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,75 л',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(c) VOC 190 g/l, VOC limit 540 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            }
        },
        Adhesive_primers: {
            EpoxyPrimer: {
                HeadInfo: {
                        Image: Adhesive_primers_Img_1,
                        Title: 'Эпоксидный грунт EP Primer RX P-03',
                },
                MainInfo: [
                    {
                        Title: 'Универсальный двухкомпонентный эпоксидный грунт может при-меняться, как антикоррозионный грунт, так и в качестве выравнивателя. Обладает высокими антикоррозионными свойствами. Характеризуется хорошей адгезией ко всем металлам и стеклопластикам.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: серый',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,8 л',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(c) VOC 520 g/l, VOC limit 540 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            PhosphatingPrimerCF1: {
                HeadInfo: {
                    Image: Adhesive_primers_Img_2,
                    Title: 'Фосфатирующий грунт CF 1+1 Washprimer CF 1+1 RX P-02',
                },
                MainInfo: [
                    {
                        Title: 'Двухкомпонентный фосфатирующий грунт обладает высокими антикоррозионными свойствами. Характеризуется отличной адгезией ко всем металлам.  Не содержит хромaтов',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: жёлтый',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,8 л',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(c) VOC 760 g/l, VOC limit 780 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            PhosphatingPrimerCF: {
                HeadInfo: {
                    Image: Adhesive_primers_Img_3,
                    Title: 'Фосфатирующий грунт CF Washprimer CF RX P-04',
                },
                MainInfo: [
                    {
                        Title: 'Однокомпонентный быстросохнущий фосфатирующий антикоррозионный грунт обеспечивает высокий уровень коррозионной стой-кости и хорошую адгезию к черной, оцинкованной, нержавеющей стали, алюминию',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: серый',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,8 л',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(c) VOC 720 g/l, VOC limit 780 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            SandingPrimerAerosol: {
                HeadInfo: {
                        Image: Adhesive_primers_Img_4,
                        Title: 'Грунт для прошлифовки аэрозоль Washprimer Spray RX P-04',
                },
                MainInfo: [
                    {
                        Title: 'Грунт для прошлифовки в аэрозольном баллоне применяется для грунтования алюминия, черной, оцинкованной и нержавеющей стали, а также “протертых” до металла (прошлифованных) покрытий. Материал обеспечивает адгезию лакокрасочного покрытия и защиту металла от коррозии. Может перекрываться эмалями без дополнительной обработки. При необходимости на Грунт для прошлифовки RX P-04 может быть нанесен акриловый грунт-выравниватель',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: серый',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Номинальный объем: 520 мл',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(e) VOC 680 g/l, VOC limit 840 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            AlkydPrimer: {
                HeadInfo: {
                    Image: Adhesive_primers_Img_5,
                    Title: 'Алкидный грунт Uniprimer RX P-01',
                },
                MainInfo: [
                    {
                        Title: 'Антикоррозионный алкидный грунт предназначен для первичного грунтования металлических деталей. Обладает высокими антикоррозионными свойствами',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: серый',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 1 кг',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(с) VOC 710 g/l, VOC limit 540 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            Insulator: {
                HeadInfo: {
                    Image: Adhesive_primers_Img_6,
                    Title: 'Изолятор Barrier Primer RX P-08',
                },
                MainInfo: [
                    {
                        Title: 'Изолятор предназначен для создания барьерного слоя при окраске термопластичных покрытий, блокирует воздействие агрессивных растворителей. Готов к применению. Перед нанесением последующих покрытий Изолятор не шлифуют.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: серый',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,5 л',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(e) VOC 640 g/l, VOC limit 840 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            PrimerOnPlastic: {
                HeadInfo: {
                        Image: Adhesive_primers_Img_7,
                        Title: 'Грунт по пластмассе Plastic Primer RX P-05',
                },
                MainInfo: [
                    {
                        Title: 'Однокомпонентный грунт по пластмассе предназначен для первичного грунтования деталей из пластика и улучшения адгезии лакокрасочного покрытия к поверхности пластиковых (в том числе полипропиленовых) деталей без применения обработки пламенем.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: прозрачный, серый',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,5л',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(а) VOC 830 g/l, VOC limit 850 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            PrimerOnPlasticSpray: {
                HeadInfo: {
                    Image: Adhesive_primers_Img_8,
                    Title: 'Грунт по пластмассе аэрозоль Plastic Primer Spray RX P-05',
                },
                MainInfo: [
                    {
                        Title: 'Однокомпонентный грунт по пластмассе в аэрозольном баллоне предназначен для первичного грунтования деталей из пластика и улучшения адгезии лакокрасочного покрытия к поверхности пластиковых, в том числе полипропиленовых, деталей без применения обработки пламенем.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: прозрачный, серый',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Номинальный объем: 520 мл',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(e) VOC 750 g/l, VOC limit 840 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            PrimerOnPlastic5: {
                HeadInfo: {
                    Image: Adhesive_primers_Img_9,
                    Title: 'Грунт по пластмассе 5+1 Plastic Plus RX P-06',
                },
                MainInfo: [
                    {
                        Title: 'Двухкомпонентный грунт по пластмассе предназначен для устранения дефектов деталей из пластика. Характеризуется отличной адгезией к пластмассе. Возможно применение методом "мокрый по мокрому". EU/2004/42 Cat II B(c) VOC 650 g/l, VOC limit 540 g/l',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: серый',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,8 л',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(c) VOC 650 g/l, VOC limit 540 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            }
        },
        Soils: {
            AcrylicPrimer3: {
                HeadInfo: {
                        Image: Soils_Img_1,
                        Title: 'Акриловый грунт 3+1 Acryl Filler 3+1 RX F-04',
                },
                MainInfo: [
                    {
                        Title: 'Двухкомпонентный акриловый грунт предназначен для выравнивания и изоляции ремонтируемых участков. Обладает хорошими наполняющими свойствами.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: белый, серый, чёрный',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,5 л; 1 л',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(c) VOC 470 g/l, VOC limit 540 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            AcrylicPrimer4: {
                HeadInfo: {
                    Image: Soils_Img_2,
                    Title: 'Акриловый грунт 4+1 HS Primer Filler 4+1 RX F-06',
                },
                MainInfo: [
                    {
                        Title: 'Двухкомпонентный акриловый грунт-выравниватель предназначен для обработки больших поверхностей. Возможно применение методом “мокрый по мокрому".',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: белый, красный, серый, чёрный',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,8 л; 3,6л',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(c) VOC 490 g/l, VOC limit 540 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            Direct_to_metalPrimer4: {
                HeadInfo: {
                    Image: Soils_Img_3,
                    Title: 'Грунт “прямо на металл” 4+1 HS Primer Surfacer 4+1 RX F-01',
                },
                MainInfo: [
                    {
                        Title: 'Двухкомпонентный акриловый грунт-выравниватель с антикоррозионными свойствами. Предназначен для нанесения на чёрную, оцинкованную и нержавеющую сталь, алюминий. Возможно применение методом “мокрый по мокрому".',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: белый, серый, чёрный',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,8 л',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(c) VOC 490 g/l, VOC limit 540 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            AcrylicPrimer5: {
                HeadInfo: {
                        Image: Soils_Img_4,
                        Title: 'Акриловый грунт 5+1 HS Primer Filler 5+1 RX F-03',
                },
                MainInfo: [
                    {
                        Title: 'Двухкомпонентный акриловый грунт-наполнитель с высоким сухим остатком позволяет создать большую толщину слоя.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: белый, красный, серый, чёрный',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,8 л; 2,5 л',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(c) VOC 510 g/l, VOC limit 540 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            AcrylicPrimer: {
                HeadInfo: {
                    Image: Soils_Img_5,
                    Title: 'Акриловый грунт Acryl Sealer RX F-02',
                },
                MainInfo: [
                    {
                        Title: 'Однокомпонентный акриловый грунт предназначен для выравнивания и изоляции ремонтируемых участков. Отличается коротким временем сушки.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: белый, серый, чёрный',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 1 кг; 3,7 кг',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(c) VOC 610 g/l, VOC limit 540 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            AcrylicPrimerAerosol: {
                HeadInfo: {
                    Image: Soils_Img_6,
                    Title: 'Акриловый грунт аэрозоль Acryl Sealer Spray RX F-02',
                },
                MainInfo: [
                    {
                        Title: 'Однокомпонентный акриловый грунт в аэрозольном баллоне предназначен для выравнивания и изоляции ремонтируемых участков.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: серый, чёрный',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Номинальный объем: 520 мл',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(e) VOC 620 g/l, VOC limit 840 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            UHS_fast_primer: {
                HeadInfo: {
                        Image: Soils_Img_7,
                        Title: 'Быстрый грунт UHS Primer Rapid 90 RX F-07',
                },
                MainInfo: [
                    {
                        Title: 'Двухкомпонентный быстрый акриловый грунт UHS с высоким сухим остатком отличается быстротой сушки 90 минут при 20°С, что позволяет уменьшить длительность рабочего процесса и снизить затраты на ремонт. Быстрый грунт UHS можно использовать методом “мокрый по мокрому”, а также наносить прямо на металл и на пластик.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: светло-серый, черный',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,8 л',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(c) VOC 490 g/l, VOC limit 540 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            }
        },
        Lucky: {
            Acrylic_lacquer_HS_Superio_RX_C_14: {
                HeadInfo: {
                        Image: Lucky_Img_1,
                        Title: 'Акриловый лак HS Superio RX C-14 HS Clear Superio',
                },
                MainInfo: [
                    {
                        Title: 'Двухкомпонентный акриловый лак нового поколения. Предназначен для окраски металлических и пластиковых деталей. Создан на основе современный европейских связующих. Отличается превосходными разливными свойствами. Характеризуется высоким сухим остатком, отличной устойчивостью к воздействию химических веществ. Обладает высоким уровнем блеска, повышенной стойкостью к царапинам (Scratch Resistant) и обеспечивает отличную защиту от ультрафиолета (UV Resistant). Применяется для локального и полного ремонта.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },
                    {
                        Title: 'Фасовка: 0,5 л; 1 л; 5 л',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(e) VOC 490 g/l, VOC limit 840 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            Acrylic_lacquer_HS_Superio_RX_C_12: {
                HeadInfo: {
                    Image: Lucky_Img_2,
                    Title: 'Акриловый лак SR Clear RX C-12 SR Clear',
                },
                MainInfo: [
                    {
                        Title: 'Двухкомпонентный акриловый лак нового поколения. Предназначен для окраски металлических и пластиковых деталей. Создан на основе современный европейских связующих. Отличается превосходными разливными свойствами. Характеризуется отличной  устойчивостью к воздействию химических веществ. Экономичен и универсален в использовании. Обладает высоким  уровнем блеска, повышенной стойкостью к царапинам (Scratch Resistant) и обеспечивает отличную защиту от ультрафиолета (UV Resistant). Применяется для локального и полного ремонта.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,5 л; 1 л; 5 л',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(e) VOC 540 g/l, VOC limit 840 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            Acrylic_lacquer_HS_RX_C_02: {
                HeadInfo: {
                    Image: Lucky_Img_3,
                    Title: 'Акриловый лак HS Clear Premium 2+1 RX C-02',
                },
                MainInfo: [
                    {
                        Title: 'Двухкомпонентный акриловый лак с высоким сухим остатком предназначен для окраски металлических и пластиковых деталей. Обладает повышенной стойкостью к царапинам (Scratch Resistant) и обеспечивает хорошую защиту от ультрафиолета (UV Resistant)',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,5 л; 1 л; 5 л',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(e) VOC 540 g/l, VOC limit 840 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            Acrylic_varnish_MS_RX_C_01: {
                HeadInfo: {
                        Image: Lucky_Img_4,
                        Title: 'Акриловый лак MS Clear Classic 2+1 RX C-01',
                },
                MainInfo: [
                    {
                        Title: 'Двухкомпонентный акриловый лак со средним сухим остатком предназначен для окраски металлических и пластиковых деталей. Обладает повышенной стойкостью к царапинам (Scratch Resistant) и обеспечивает хорошую защиту от ультрафиолета (UV Resistant)',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,5 л; 1 л; 5 л',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(e) VOC 590 g/l, VOC limit 840 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            Optim_acrylic_varnish: {
                HeadInfo: {
                    Image: Lucky_Img_5,
                    Title: 'Акриловый лак Optim MS Clear Optim 2+1 RX C-05',
                },
                MainInfo: [
                    {
                        Title: 'Двухкомпонентный акриловый лак со средним сухим остатком предназначен для окраски металлических и пластиковых деталей. Обладает повышенной стойкостью к царапинам (Scratch Resistant) и обеспечивает хорошую защиту от ультрафиолета (UV Resistant).',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },
                    {
                        Title: 'Фасовка: 0,5 л; 1 л; 5 л',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(e) VOC 550 g/l, VOC limit 840 g/l ',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            Acrylic_varnish_MS_RX_C_03: {
                HeadInfo: {
                    Image: Lucky_Img_6,
                    Title: 'Акриловый лак MS Clear Express 2+1 RX C-03',
                },
                MainInfo: [
                    {
                        Title: 'Двухкомпонентный быстросохнущий акриловый лак предназначен для локального и подетального ремонта металлических и пластиковых деталей. Обладает повышенной стойкостью к царапинам (Scratch Resistant) и обеспечивает хорошую защиту от ультрафиолета (UV Resistant)',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 1 л; 5 л',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(e) VOC 540 g/l, VOC limit 840 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            Acrylic_varnish_MS_RX_C_06: {
                HeadInfo: {
                        Image: Lucky_Img_7,
                        Title: 'Акриловый лак MS Clear Express 3+1 RX C-06',
                },
                MainInfo: [
                    {
                        Title: 'Двухкомпонентный быстросохнущий акриловый лак предназначен для локального и подетального ремонта металлических и пластиковых деталей. Обладает повышенной стойкостью к царапинам (Scratch Resistant) и обеспечивает хорошую защиту от ультрафиолета (UV Resistant).',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,5л',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(е) VOC 540 g/l, VOC limit 840 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            Super_fast_varnish_RX_C_07: {
                HeadInfo: {
                    Image: Lucky_Img_8,
                    Title: 'Супербыстрый лак Clear Rapid 90 RX C-07',
                },
                MainInfo: [
                    {
                        Title: 'Двухкомпонентный супербыстрый акриловый лак отличается коротким временем сушки - всего 90 минут при +20°С, что позволяет ускорить ремонт и повысить эффективность рабочего процесса и снизить затраты на ремонт. Предназначен для окраски металлических и пластиковых деталей. Обладает повышенной стойкостью к царапинам (Scratch Resistant) и обеспечивает отличную защиту от ультрафиолета (UV Resistant).',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,5 л; 1 л; 5 л',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(e) VOC 530 g/l, VOC limit 840 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            Acrylic_varnish_MS_aerosol_RX_C_04: {
                HeadInfo: {
                    Image: Lucky_Img_9,
                    Title: 'Акриловый лак MS аэрозоль MS Clear Spray RX C-04',
                },
                MainInfo: [
                    {
                        Title: 'Акриловый лак со средним сухим остатком в аэрозольном баллоне предназначен для окраски металлических и пластиковых деталей. Обеспечивает хорошую защиту от ультрафиолета, стойкий к механическому воздействию.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Номинальный объем: 520 мл',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(e) VOC 620 g/l, VOC limit 840 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            }
        },
        Protective_materials: {
            Antigravel_HS_GraviPro_RX_N_09: {
                HeadInfo: {
                        Image: Protective_materials_Img_1,
                        Title: 'Антигравий HS аэрозоль HS GraviPro Spray RX N-09',
                },
                MainInfo: [
                    {
                        Title: 'Антигравий HS предназначен для создания плотного эластичного покрытия, защищающего от ударов камней и воздействия бензина, масел, воды и солей, обладающего шумоизоляционными и антикоррозионными свойствами. Возможно нанесение толстослойного покрытия в один слой, не склонен к потекам.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: серый, чёрный',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 1 л',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(e) VOC 550 g/l, VOC limit 840 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            Antigravel_HS_aerosol_HS_GraviPro_Spray_RX_N_09: {
                HeadInfo: {
                    Image: Protective_materials_Img_2,
                    Title: 'Антигравий HS аэрозоль HS GraviPro Spray RX N-09',
                },
                MainInfo: [
                    {
                        Title: 'Антигравий HS предназначен для создания плотного эластичного покрытия, защищающего от ударов камней и воздействия бензина, масел, воды и солей, обладающего шумоизоляционными и антикоррозионными свойствами. Может окрашиваться большинством лакокрасочных материалов методом “мокрый по мокрому”.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: серый, чёрный',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Номинальный объем: 520 мл',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(e) VOC 610 g/l, VOC limit 840 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            Brush_Sealan_RX_P_10: {
                HeadInfo: {
                    Image: Protective_materials_Img_3,
                    Title: 'Шовный кистевой герметик Brush Sealant RX P-10',
                },
                MainInfo: [
                    {
                        Title: 'Шовный кистевой герметик предназначен  для герметизации металлических стыков и сварных швов при кузовном ремонте. Обладает отличными антикоррозионными и звукоизолирующими свойствами. Легко наносится, образует эластичное покрытие. Стоек к воздействию внешней среды.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: серый',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,8 кг',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(e) VOC 460 g/l, VOC limit 840 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            Polyester_resin_Repair_Resin_RX_N_04: {
                HeadInfo: {
                        Image: Protective_materials_Img_4,
                        Title: 'Полиэфирная смола Repair Resin RX N-04',
                },
                MainInfo: [
                    {
                        Title: 'Полиэфирная смола применяется вместе с армирующим материалом (Cтекломат RX N-05). Предназначена для ремонта деталей из пластика, укрепления поражённого сквозной коррозией металла, изготовления элементов автотюнинга',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 1 кг',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(b) VOC 120 g/l, VOC limit 250 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            Repair_kit_Repair_Box_RX_N_07: {
                HeadInfo: {
                    Image: Protective_materials_Img_5,
                    Title: 'Ремонтный комплект Repair Box RX N-07',
                },
                MainInfo: [
                    {
                        Title: 'Ремонтный комплект содержит набор материалов (полиэфирная смола, отвердитель и стекломат) для ремонта деталей из пластика, укрепления поражённого сквозной коррозией металла, изготовления элементов автотюнинга.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Отвердитель RX H-42, 15 г',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }, 
                    {
                        Title: 'Комплект: Полиэфирная смола RX N-04, 0,25 кг',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    },      
                    {
                        Title: 'Стекломат RX N-05, 0,25 м',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },    
                    {
                        Title: 'EU/2004/42 Cat II B(c) VOC 610 g/l, VOC limit 540 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            }
        },
        Special_coatings: {
            Structure_Coat_RX_P_07: {
                HeadInfo: {
                        Image: Special_coatings_Img_1,
                        Title: 'Структурное покрытие Structure Coat RX P-07',
                },
                MainInfo: [
                    {
                        Title: 'Однокомпонентная эмаль со структурной добавкой предназначена для окраски поверхности бамперов, наружных молдингов, элементов боковых зеркал и других пластиковых деталей, характеризуется коротким временем сушки, отличной адгезией к пластиковым поверхностям (кроме полиэтилена РЕ), хорошей эластичностью, стойкостью к сколам и растрескиванию, простотой в применении. Материал позволяет восстановить поврежденную структуру пластиковой детали.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: графит, серый, чёрный',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,75л',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(e) VOC 660 g/l, VOC limit 840 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            Enamel_for_bumpers_Bumper_Paint_RX_P_11: {
                HeadInfo: {
                    Image: Special_coatings_Img_2,
                    Title: 'Эмаль для бамперов Bumper Paint RX P-11',
                },
                MainInfo: [
                    {
                        Title: 'Однокомпонентная эмаль для бамперов предназначена для окраски пластиковых деталей, таких как бамперы, наружные молдинги, элементы боковых зеркал и др. Характеризуется коротким временем сушки, отличной адгезией к пластиковым поверхностям (кроме полиэтилена РЕ), хорошей эластичностью, стойкостью к сколам и растрескиванию, простотой в применении',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: графит, серый, чёрный',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,75л',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(d) VOC 680 g/l, VOC limit 420 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            Enamel_for_bumpers_aerosol_Bumper_Paint_Spray_RX_P_11: {
                HeadInfo: {
                    Image: Special_coatings_Img_3,
                    Title: 'Эмаль для бамперов аэрозоль Bumper Paint Spray RX P-11',
                },
                MainInfo: [
                    {
                        Title: 'Однокомпонентная эмаль для бамперов в аэрозольном баллоне предназначена для окраски пластиковых деталей, таких как бамперы, наружные молдинги, элементы боковых зеркал и др. Характеризуется коротким временем сушки, отличной адгезией к пластиковым поверхностям (кроме полиэтилена PE), хорошей эластичностью, стойкостью к сколам и растрескиванию, простотой в применении.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: графит, серый, черный',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Номинальный объем: 520 мл',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(e) VOC 610 g/l, VOC limit 840 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            Primer_enamel_DTM_Coat_RX_E_01: {
                HeadInfo: {
                        Image: Special_coatings_Img_4,
                        Title: 'Грунт-эмаль DTM Сoat RX E-01',
                },
                MainInfo: [
                    {
                        Title: 'Однокомпонентная акриловая грунт-эмаль предназначена для окраски металлических и пластиковых деталей',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: чёрный, чёрный матовый',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,5 кг',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(d) VOC 700 g/l, VOC limit 420 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            Acrylic_enamel_aerosol_Acryl_Top_Spray_RX_E_03: {
                HeadInfo: {
                    Image: Special_coatings_Img_5,
                    Title: 'Акриловая эмаль аэрозоль Acryl Top Spray RX E-03',
                },
                MainInfo: [
                    {
                        Title: 'Однокомпонентная акриловая эмаль в аэрозольной упаковке предназначена для окраски металлических и пластиковых деталей.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: чёрный, чёрный матовый',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Номинальный объем: 520 мл',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(e) VOC 610 g/l, VOC limit 840 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            Enamel_for_disks_aerosol_Disk_Top_Spray_RX_E_02: {
                HeadInfo: {
                    Image: Special_coatings_Img_6,
                    Title: 'Эмаль для дисков аэрозоль Disk Top Spray RX E-02',
                },
                MainInfo: [
                    {
                        Title: 'Однокомпонентная эмаль в аэрозольной упаковке предназначена для окраски колёсных дисков. Для дополнительной защиты рекомендуется покрывать эмаль лаком',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: серебристый',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Номинальный объем: 520 мл',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(e) VOC 690 g/l, VOC limit 840 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            }
        }, 
        Supporting_materials: {
            Base_Coat_RX_B_01_base_enamel: {
                HeadInfo: {
                        Image: Supporting_materials_Img_1,
                        Title: 'Эмаль базовая Base Coat RX B-01',
                },
                MainInfo: [
                    {
                        Title: 'Эмаль базовая предназначена для создания декоративных покрытий металлических и пластиковых деталей в системе “База+лак”. Базовые эмали представлены готовыми цветами и компонентами COLORMIX SYSTEM BC',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 1 л; 3,5 л',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }
                ]
            },
            Blender_RX_T_05_Transition_Base: {
                HeadInfo: {
                    Image: Supporting_materials_Img_2,
                    Title: 'Антигравий HS аэрозоль HS GraviPro Spray RX N-09',
                },
                MainInfo: [
                    {
                        Title: 'Антигравий HS предназначен для создания плотного эластичного покрытия, защищающего от ударов камней и воздействия бензина, масел, воды и солей, обладающего шумоизоляционными и антикоррозионными свойствами. Может окрашиваться большинством лакокрасочных материалов методом “мокрый по мокрому”.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: серый, чёрный',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Номинальный объем: 520 мл',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(e) VOC 610 g/l, VOC limit 840 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            Acrylic_Acryl_Top_RX_E_03_enamel: {
                HeadInfo: {
                    Image: Supporting_materials_Img_3,
                    Title: 'Шовный кистевой герметик Brush Sealant RX P-10',
                },
                MainInfo: [
                    {
                        Title: 'Шовный кистевой герметик предназначен  для герметизации металлических стыков и сварных швов при кузовном ремонте. Обладает отличными антикоррозионными и звукоизолирующими свойствами. Легко наносится, образует эластичное покрытие. Стоек к воздействию внешней среды.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Цвет: серый',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 0,8 кг',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(e) VOC 460 g/l, VOC limit 840 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            Avtolak_RX_E_04_air_drying_auto_enamel: {
                HeadInfo: {
                        Image: Supporting_materials_Img_4,
                        Title: 'Полиэфирная смола Repair Resin RX N-04',
                },
                MainInfo: [
                    {
                        Title: 'Полиэфирная смола применяется вместе с армирующим материалом (Cтекломат RX N-05). Предназначена для ремонта деталей из пластика, укрепления поражённого сквозной коррозией металла, изготовления элементов автотюнинга',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Фасовка: 1 кг',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    },        
                    {
                        Title: 'EU/2004/42 Cat II B(b) VOC 120 g/l, VOC limit 250 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            },
            Auto_enamel_air_drying_aerosol_Avtolak_Spray_RX_E_04: {
                HeadInfo: {
                    Image: Supporting_materials_Img_5,
                    Title: 'Ремонтный комплект Repair Box RX N-07',
                },
                MainInfo: [
                    {
                        Title: 'Ремонтный комплект содержит набор материалов (полиэфирная смола, отвердитель и стекломат) для ремонта деталей из пластика, укрепления поражённого сквозной коррозией металла, изготовления элементов автотюнинга.',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    }, 
                    {
                        Title: 'Отвердитель RX H-42, 15 г',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }, 
                    {
                        Title: 'Комплект: Полиэфирная смола RX N-04, 0,25 кг',
                        Color: "#E91E63",
                        Shadow: "3px 3px 4px rgba(255,60,129, 0.7)"
                    },      
                    {
                        Title: 'Стекломат RX N-05, 0,25 м',
                        Color: "#9C27B0",
                        Shadow: "3px 3px 4px rgba(156,39,176, 0.7)"
                    },    
                    {
                        Title: 'EU/2004/42 Cat II B(c) VOC 610 g/l, VOC limit 540 g/l',
                        Color: "#2196F3",
                        Shadow: "3px 3px 4px rgba(33,150,243, 0.7)"
                    }
                ]
            }
        },
    },

    getState() {
        return this._state;
    }

};

export default store;