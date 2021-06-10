class FactoryController{

  static init(type: any) {
    return type.create();
  }
};

export default FactoryController;