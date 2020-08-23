import React from 'react';
import './App.css';
import TypesProducts from './components/TypesProducts/TypesProducts';
import Info from './components/Info/Info';
import Content from './components/Content/Content';
import {Route} from "react-router-dom";

const App = (props) => {

    // Footer пока не импортируется ( Не доделан )
    return (
        <section className="main">
        
            <Route  exact path='/'
                    render={() => <Content
                    ContentApps={props.state.ContentApps}/>}/>

            {/* Информация в отображаемая в зависимости от выброного каталога */}
            
            <Route  path='/PuttiesTypes'
                    render={() => <TypesProducts 
                    TypesProducts={props.state.TypesProducts.PuttiesTypes} />}/>

            <Route  path='/Adhesive_primers'
                    render={() => <TypesProducts 
                    TypesProducts={props.state.TypesProducts.Adhesive_primers} />}/>

            <Route  path='/Soils'
                    render={() => <TypesProducts 
                    TypesProducts={props.state.TypesProducts.Soils} />}/>

            <Route  path='/Lucky'
                    render={() => <TypesProducts 
                    TypesProducts={props.state.TypesProducts.Lucky} />}/>

            <Route  path='/Protective_materials'
                    render={() => <TypesProducts 
                    TypesProducts={props.state.TypesProducts.Protective_materials} />}/>

            <Route  path='/Special_coatings'
                    render={() => <TypesProducts 
                    TypesProducts={props.state.TypesProducts.Special_coatings} />}/>

            <Route  path='/Supporting_materials'
                    render={() => <TypesProducts 
                    TypesProducts={props.state.TypesProducts.Supporting_materials} />}/>
                    
        {/* Информация в отображаемая в зависимости от выброного каталога */}

            <Route  path='/Universal putty'
                    render={() => <Info  
                    PuttiesInfo={props.state.PuttiesInfo.UniversalPutty} />}/>

            <Route  path='/FinelyDispersedPutty'
                    render={() => <Info 
                    PuttiesInfo={props.state.PuttiesInfo.FinelyDispersedPutty} />}/>

            <Route  path='/PuttyWithAluminum'
                    render={() => <Info 
                    PuttiesInfo={props.state.PuttiesInfo.PuttyWithAluminum} />}/>

            <Route  path='/GlassFiberPutty'
                    render={() => <Info 
                    PuttiesInfo={props.state.PuttiesInfo.GlassFiberPutty} />}/>

            <Route  path='/CarbonFiberPutty'
                    render={() => <Info 
                    PuttiesInfo={props.state.PuttiesInfo.CarbonFiberPutty} />}/>

            <Route  path='/SprayPutty'
                    render={() => <Info 
                    PuttiesInfo={props.state.PuttiesInfo.SprayPutty} />}/>

        {/* Информация в отображаемая в зависимости от выброного каталога */}

            <Route  path='/EpoxyPrimer'
                    render={() => <Info  
                    PuttiesInfo={props.state.Adhesive_primers.EpoxyPrimer} />}/>

            <Route  path='/PhosphatingPrimerCF1+1'
                    render={() => <Info 
                    PuttiesInfo={props.state.Adhesive_primers.PhosphatingPrimerCF1} />}/>

            <Route  path='/PhosphatingPrimerCF'
                    render={() => <Info 
                    PuttiesInfo={props.state.Adhesive_primers.PhosphatingPrimerCF} />}/>

            <Route  path='/SandingPrimerAerosol'
                    render={() => <Info 
                    PuttiesInfo={props.state.Adhesive_primers.SandingPrimerAerosol} />}/>

            <Route  path='/AlkydPrimer'
                    render={() => <Info 
                    PuttiesInfo={props.state.Adhesive_primers.AlkydPrimer} />}/>

            <Route  path='/Insulator'
                    render={() => <Info 
                    PuttiesInfo={props.state.Adhesive_primers.Insulator} />}/>

            <Route  path='/PrimerOnPlastic'
                    render={() => <Info 
                    PuttiesInfo={props.state.Adhesive_primers.PrimerOnPlastic} />}/>

            <Route  path='/PrimerOnPlasticSpray'
                    render={() => <Info 
                    PuttiesInfo={props.state.Adhesive_primers.PrimerOnPlasticSpray} />}/>

            <Route  path='/PrimerOnPlastic5+1'
                    render={() => <Info 
                    PuttiesInfo={props.state.Adhesive_primers.PrimerOnPlastic5} />}/>

        {/* Soils */}

            <Route  path='/AcrylicPrimer3'
                    render={() => <Info  
                    PuttiesInfo={props.state.Soils.AcrylicPrimer3} />}/>

            <Route  path='/AcrylicPrimer4'
                    render={() => <Info 
                    PuttiesInfo={props.state.Soils.AcrylicPrimer4} />}/>

            <Route  path='/Direct_to_metalPrimer4'
                    render={() => <Info 
                    PuttiesInfo={props.state.Soils.Direct_to_metalPrimer4} />}/>

            <Route  path='/AcrylicPrimer5'
                    render={() => <Info 
                    PuttiesInfo={props.state.Soils.AcrylicPrimer5} />}/>

            <Route  path='/AcrylicPrimer'
                    render={() => <Info 
                    PuttiesInfo={props.state.Soils.AcrylicPrimer} />}/>

            <Route  path='/AcrylicPrimerAerosol'
                    render={() => <Info 
                    PuttiesInfo={props.state.Soils.AcrylicPrimerAerosol} />}/>

            <Route  path='/UHS_fast_primer'
                    render={() => <Info 
                    PuttiesInfo={props.state.Soils.UHS_fast_primer} />}/>

        {/* Информация в отображаемая в зависимости от выброного каталога */}

            <Route  path='/Acrylic_lacquer_HS_Superio_RX_C_14'
                    render={() => <Info  
                    PuttiesInfo={props.state.Lucky.Acrylic_lacquer_HS_Superio_RX_C_14} />}/>

            <Route  path='/Acrylic_lacquer_HS_Superio_RX_C_12'
                    render={() => <Info 
                    PuttiesInfo={props.state.Lucky.Acrylic_lacquer_HS_Superio_RX_C_12} />}/>

            <Route  path='/Acrylic_lacquer_HS_RX_C_02'
                    render={() => <Info 
                    PuttiesInfo={props.state.Lucky.Acrylic_lacquer_HS_RX_C_02} />}/>

            <Route  path='/Acrylic_varnish_MS_RX_C_01'
                    render={() => <Info 
                    PuttiesInfo={props.state.Lucky.Acrylic_varnish_MS_RX_C_01} />}/>

            <Route  path='/Optim_acrylic_varnish'
                    render={() => <Info 
                    PuttiesInfo={props.state.Lucky.Optim_acrylic_varnish} />}/>

            <Route  path='/Acrylic_varnish_MS_RX_C_03'
                    render={() => <Info 
                    PuttiesInfo={props.state.Lucky.Acrylic_varnish_MS_RX_C_03} />}/>

            <Route  path='/Acrylic_varnish_MS_RX_C_06'
                    render={() => <Info 
                    PuttiesInfo={props.state.Lucky.Acrylic_varnish_MS_RX_C_06} />}/>

            <Route  path='/Super_fast_varnish_RX_C_07'
                    render={() => <Info 
                    PuttiesInfo={props.state.Lucky.Super_fast_varnish_RX_C_07} />}/>

            <Route  path='/Acrylic_varnish_MS_aerosol_RX_C_04'
                    render={() => <Info 
                    PuttiesInfo={props.state.Lucky.Acrylic_varnish_MS_aerosol_RX_C_04} />}/>

        {/* Информация в отображаемая в зависимости от выброного каталога */}

            <Route  path='/Antigravel_HS_GraviPro_RX_N_09'
                    render={() => <Info  
                    PuttiesInfo={props.state.Protective_materials.Antigravel_HS_GraviPro_RX_N_09} />}/>

            <Route  path='/Antigravel_HS_aerosol_HS_GraviPro_Spray_RX_N_09'
                    render={() => <Info 
                    PuttiesInfo={props.state.Protective_materials.Antigravel_HS_aerosol_HS_GraviPro_Spray_RX_N_09} />}/>

            <Route  path='/Brush_Sealan_RX_P_10'
                    render={() => <Info 
                    PuttiesInfo={props.state.Protective_materials.Brush_Sealan_RX_P_10} />}/>

            <Route  path='/Polyester_resin_Repair_Resin_RX_N_04'
                    render={() => <Info 
                    PuttiesInfo={props.state.Protective_materials.Polyester_resin_Repair_Resin_RX_N_04} />}/>

            <Route  path='/Repair_kit_Repair_Box_RX_N_07'
                    render={() => <Info 
                    PuttiesInfo={props.state.Protective_materials.Repair_kit_Repair_Box_RX_N_07} />}/>

        {/* Информация в отображаемая в зависимости от выброного каталога */}

            <Route  path='/Structure_Coat_RX_P_07'
                    render={() => <Info  
                    PuttiesInfo={props.state.Special_coatings.Structure_Coat_RX_P_07} />}/>

            <Route  path='/Enamel_for_bumpers_Bumper_Paint_RX_P_11'
                    render={() => <Info 
                    PuttiesInfo={props.state.Special_coatings.Enamel_for_bumpers_Bumper_Paint_RX_P_11} />}/>

            <Route  path='/Enamel_for_bumpers_aerosol_Bumper_Paint_Spray_RX_P_11'
                    render={() => <Info 
                    PuttiesInfo={props.state.Special_coatings.Enamel_for_bumpers_aerosol_Bumper_Paint_Spray_RX_P_11} />}/>

            <Route  path='/Primer_enamel_DTM_Coat_RX_E_01'
                    render={() => <Info 
                    PuttiesInfo={props.state.Special_coatings.Primer_enamel_DTM_Coat_RX_E_01} />}/>

            <Route  path='/Acrylic_enamel_aerosol_Acryl_Top_Spray_RX_E_03'
                    render={() => <Info 
                    PuttiesInfo={props.state.Special_coatings.Acrylic_enamel_aerosol_Acryl_Top_Spray_RX_E_03} />}/>

            <Route  path='/Enamel_for_disks_aerosol_Disk_Top_Spray_RX_E_02'
                    render={() => <Info 
                    PuttiesInfo={props.state.Special_coatings.Enamel_for_disks_aerosol_Disk_Top_Spray_RX_E_02} />}/>

        {/* Информация в отображаемая в зависимости от выброного каталога */}

            <Route  path='/Base_Coat_RX_B_01_base_enamel'
                    render={() => <Info  
                    PuttiesInfo={props.state.Supporting_materials.Base_Coat_RX_B_01_base_enamel} />}/>

            <Route  path='/Blender_RX_T_05_Transition_Base'
                    render={() => <Info 
                    PuttiesInfo={props.state.Supporting_materials.Blender_RX_T_05_Transition_Base} />}/>

            <Route  path='/Acrylic_Acryl_Top_RX_E_03_enamel'
                    render={() => <Info 
                    PuttiesInfo={props.state.Supporting_materials.Acrylic_Acryl_Top_RX_E_03_enamel} />}/>

            <Route  path='/Avtolak_RX_E_04_air_drying_auto_enamel'
                    render={() => <Info 
                    PuttiesInfo={props.state.Supporting_materials.Avtolak_RX_E_04_air_drying_auto_enamel} />}/>

            <Route  path='/Auto_enamel_air_drying_aerosol_Avtolak_Spray_RX_E_04'
                    render={() => <Info 
                    PuttiesInfo={props.state.Supporting_materials.Auto_enamel_air_drying_aerosol_Avtolak_Spray_RX_E_04} />}/>
        </section>
    );
};


export default App;
