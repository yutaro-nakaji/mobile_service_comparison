class OpticalLine < ActiveHash::Base
  self.data = [
    { id: 1, name: '契約なし' },
    { id: 2, name: 'ドコモ光' },
    { id: 3, name: 'auひかり' },
    { id: 4, name: 'softbank光' }
  ]
end
