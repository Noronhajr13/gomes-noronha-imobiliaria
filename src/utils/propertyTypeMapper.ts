/**
 * Mapeamento centralizado de tipos de propriedade e transação
 * Converte valores do frontend (UI) para valores da API (backend)
 */

// Mapeamento de tipos de imóvel: UI -> API
export const propertyTypeMap: Record<string, string> = {
  'Casa': 'CASA',
  'Apartamento': 'APARTAMENTO',
  'Terreno': 'TERRENO',
  'Sala Comercial': 'SALA_COMERCIAL',
  'Loja': 'LOJA',
  'Galpão': 'GALPAO',
  'Sítio': 'SITIO',
  'Cobertura': 'COBERTURA',
  'Kitnet': 'KITNET',
  'Flat': 'FLAT'
};

// Mapeamento de tipos de transação: UI -> API
export const transactionTypeMap: Record<string, string> = {
  'Venda': 'VENDA',
  'Aluguel': 'ALUGUEL',
  'Venda/Aluguel': 'VENDA_ALUGUEL'
};

/**
 * Converte tipo de imóvel do formato UI para formato API
 * @param uiType - Tipo como exibido na interface (ex: "Casa", "Apartamento")
 * @returns Tipo no formato da API (ex: "CASA", "APARTAMENTO") ou o valor original se não mapeado
 */
export const mapPropertyType = (uiType: string): string => {
  return propertyTypeMap[uiType] || uiType;
};

/**
 * Converte tipo de transação do formato UI para formato API
 * @param uiTransaction - Tipo como exibido na interface (ex: "Venda", "Aluguel")
 * @returns Tipo no formato da API (ex: "VENDA", "ALUGUEL") ou o valor original se não mapeado
 */
export const mapTransactionType = (uiTransaction: string): string => {
  return transactionTypeMap[uiTransaction] || uiTransaction;
};

// Lista de tipos de imóvel disponíveis (para selects/dropdowns)
export const propertyTypes = Object.keys(propertyTypeMap);

// Lista de tipos de transação disponíveis (para selects/dropdowns)
export const transactionTypes = Object.keys(transactionTypeMap);
