
import React from 'react';
import { Token } from '../types';

interface TokenSelectorProps {
  currentTokens: Token[];
  onTokensChange: (tokens: Token[]) => void;
  onClose: () => void;
}

const TokenSelector: React.FC<TokenSelectorProps> = ({
  currentTokens,
  onTokensChange,
  onClose
}) => {
  const tokenTypes = [
    { type: 'drunk' as const, name: '취함', color: 'bg-purple-400' },
    { type: 'poisoned' as const, name: '독', color: 'bg-green-400' },
    { type: 'grandchild' as const, name: '손주', color: 'bg-pink-400' },
    { type: 'red_herring' as const, name: '붉은청어', color: 'bg-red-400' },
    { type: 'good_gossip' as const, name: '선한가쉽', color: 'bg-blue-400' },
    { type: 'witch_curse' as const, name: '마녀저주', color: 'bg-black text-white' },
    { type: 'vigo_poison' as const, name: '비고독', color: 'bg-yellow-400' },
  ];

  const addToken = (type: Token['type']) => {
    const newToken: Token = {
      type,
      id: `${type}-${Date.now()}`
    };
    onTokensChange([...currentTokens, newToken]);
  };

  const removeToken = (tokenId: string) => {
    onTokensChange(currentTokens.filter(token => token.id !== tokenId));
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="absolute top-0 left-0 w-64 bg-white border border-gray-300 rounded shadow-lg p-4 z-10"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold">토큰 선택</h4>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 mb-3">
        {tokenTypes.map(tokenType => (
          <button
            key={tokenType.type}
            onClick={() => addToken(tokenType.type)}
            className={`w-full text-left p-2 rounded text-sm ${tokenType.color} hover:opacity-80`}
          >
            {tokenType.name}
          </button>
        ))}
      </div>

      {currentTokens.length > 0 && (
        <div>
          <h5 className="font-medium mb-2">현재 토큰:</h5>
          <div className="flex flex-wrap gap-1">
            {currentTokens.map(token => {
              const tokenInfo = tokenTypes.find(t => t.type === token.type);
              return (
                <span
                  key={token.id}
                  className={`inline-flex items-center px-2 py-1 rounded text-xs ${tokenInfo?.color}`}
                  onClick={() => removeToken(token.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {tokenInfo?.name}
                  <span className="ml-1">×</span>
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TokenSelector;
