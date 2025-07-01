
import React, { useState } from 'react';
import { Token } from '../types';

interface TokenSelectorModalProps {
  isOpen: boolean;
  currentTokens: Token[];
  onTokensChange: (tokens: Token[]) => void;
  onClose: () => void;
}

const TOKEN_TYPES = [
  { type: 'vigo_poison', name: '비고 독', color: 'bg-purple-500' },
  { type: 'poison', name: '독살 독', color: 'bg-green-500' },
  { type: 'drunk', name: '주정뱅이', color: 'bg-yellow-500' },
  { type: 'grandmother', name: '할머니', color: 'bg-pink-500' },
  { type: 'grandchild', name: '손자', color: 'bg-blue-500' },
  { type: 'witch_curse', name: '마녀', color: 'bg-purple-700' },
  { type: 'scholar', name: '선비', color: 'bg-indigo-500' },
  { type: 'charm', name: '매혹', color: 'bg-red-500' },
  { type: 'red_herring', name: '붉은청어', color: 'bg-red-700' }
] as const;

export default function TokenSelectorModal({ isOpen, currentTokens, onTokensChange, onClose }: TokenSelectorModalProps) {
  const [selectedTokens, setSelectedTokens] = useState<Token[]>(currentTokens);

  if (!isOpen) return null;

  const toggleToken = (tokenType: typeof TOKEN_TYPES[number]) => {
    const existingToken = selectedTokens.find(t => t.type === tokenType.type);
    
    if (existingToken) {
      setSelectedTokens(selectedTokens.filter(t => t.id !== existingToken.id));
    } else {
      const newToken: Token = {
        id: `${tokenType.type}-${Date.now()}`,
        type: tokenType.type,
        name: tokenType.name
      };
      setSelectedTokens([...selectedTokens, newToken]);
    }
  };

  const handleSave = () => {
    onTokensChange(selectedTokens);
    onClose();
  };

  const isTokenSelected = (tokenType: string) => {
    return selectedTokens.some(t => t.type === tokenType);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-6 text-center">토큰 선택</h2>
        
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mb-6">
          {TOKEN_TYPES.map(tokenType => (
            <div
              key={tokenType.type}
              onClick={() => toggleToken(tokenType)}
              className={`
                ${tokenType.color} ${isTokenSelected(tokenType.type) ? 'ring-4 ring-blue-300' : ''}
                text-white cursor-pointer transition-colors rounded-lg p-3 flex flex-col items-center
              `}
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-gray-800">
                  {tokenType.name.charAt(0)}
                </span>
              </div>
              <span className="text-sm font-medium text-center">{tokenType.name}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
          >
            취소
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
