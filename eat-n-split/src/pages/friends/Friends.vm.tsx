// src/components/Friends/useFriendsViewModel.ts
import { useState, useMemo } from 'react';
import { friends as friendsData } from '../../data/Friends';
import type { Friend } from '../../models/Friend.m';

function getBalanceStatus(friend: Friend): string {
    if (friend.balance < 0) return `You owe $${Math.abs(friend.balance)} to ${friend.name}.`;
    if (friend.balance > 0) return `${friend.name} owes you $${friend.balance}.`;
    return `You and ${friend.name} are even.`;
}

export function useFriendsViewModel() {
    const [friends] = useState(friendsData);

    const friendsWithStatus = useMemo(() => {
        return friends.map(friend => ({
            ...friend,
            status: getBalanceStatus(friend),
        }));
    }, [friends]);

    // O hook expõe apenas os dados prontos que a View precisa.
    return {
        friendsWithStatus,
    };
}