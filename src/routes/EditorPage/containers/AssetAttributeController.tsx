import * as React from "react";
import styled from 'styled-components';
import BasicContainer from '../components/attribute-controller/BasicController';
import StoreModel from '../models/StoreModel';
import { changeAssetStyle, updateAssetAttr } from '../reducers/asset';
import { ChangeStylePayload } from '../models/payload/ChangeStylePayload';
import { connect } from 'react-redux';
import { UpdateAttrPayload } from '../models/payload/UpdateAttrPayload';

const Container = styled.div`
  width: 300px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
`

const mapDispatchToProps = {
  changeAssetStyle,
  updateAssetAttr
};

const mapStateToProps = (state: StoreModel) => {
  return {
    editor: state.editor
  }
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const AssetAttributeController: React.FC<Props> = (props) => {
  const currentSlide = props.editor.slides.find(s => s.id === props.editor.selectedSlideId);
  if (!currentSlide) { return (<></>); }
  const assetId = currentSlide.selectedAssetId;
  const asset = currentSlide.assets.find(a => a.id === assetId);
  if (assetId === undefined || !asset) { return (<></>); }
  const changeStyleHandler = React.useCallback((style: React.CSSProperties) => props.changeAssetStyle(new ChangeStylePayload(assetId, style)), [assetId, props.changeAssetStyle]);
  const changeAttrHandler = React.useCallback((name: string, value: any) => props.updateAssetAttr(new UpdateAttrPayload(assetId, name, value)), [assetId, props.updateAssetAttr]);
  return (
    <Container>
      <BasicContainer
        width={asset.width}
        height={asset.height}
        x={asset.position.x}
        y={asset.position.y}
        angle={asset.attr.angle}
        style={asset.style}
        onChangeStyle={changeStyleHandler}
        onChangeAttribute={changeAttrHandler}
      />
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AssetAttributeController);